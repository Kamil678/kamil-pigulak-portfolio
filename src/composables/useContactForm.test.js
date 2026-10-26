import { beforeEach, describe, expect, it, vi } from "vitest";

const send = vi.fn();
vi.mock("@emailjs/browser", () => ({ default: { send } }));

async function setup({ configured = true } = {}) {
  vi.resetModules();
  for (const name of ["SERVICE_ID", "TEMPLATE_ID", "PUBLIC_KEY"]) {
    vi.stubEnv(`VITE_EMAILJS_${name}`, configured ? `test-${name}` : "");
  }
  const { useContactForm } = await import("./useContactForm");
  return useContactForm();
}

function fill(form) {
  Object.assign(form, { name: "Jan Kowalski", email: "jan@example.com", subject: "Oferta", message: "Dzień dobry" });
}

describe("useContactForm", () => {
  beforeEach(() => {
    send.mockReset();
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  it("requires every field and checks the email format", async () => {
    const { form, errors, submit } = await setup();
    form.email = "not-an-email";
    await submit();

    expect(errors).toEqual({
      name: "contact.validation.required",
      email: "contact.validation.email",
      subject: "contact.validation.required",
      message: "contact.validation.required",
    });
    expect(send).not.toHaveBeenCalled();
  });

  it("sends trimmed values and clears the form", async () => {
    const { form, status, submit } = await setup();
    fill(form);
    form.name = "  Jan Kowalski  ";
    await submit();

    expect(send).toHaveBeenCalledWith(
      "test-SERVICE_ID",
      "test-TEMPLATE_ID",
      { name: "Jan Kowalski", email: "jan@example.com", subject: "Oferta", message: "Dzień dobry" },
      "test-PUBLIC_KEY",
    );
    expect(status.value).toBe("success");
    expect(form.name).toBe("");
  });

  it("shows an error when sending fails", async () => {
    send.mockRejectedValueOnce(new Error("network"));
    const { form, status, submit } = await setup();
    fill(form);
    await submit();

    expect(status.value).toBe("error");
    expect(form.name).toBe("Jan Kowalski");
  });

  it("shows an error when EmailJS is not configured", async () => {
    const { form, status, submit } = await setup({ configured: false });
    fill(form);
    await submit();

    expect(status.value).toBe("error");
    expect(send).not.toHaveBeenCalled();
  });

  it("silently drops submissions with the honeypot filled in", async () => {
    const { form, status, honeypot, submit } = await setup();
    fill(form);
    honeypot.value = "https://spam.example";
    await submit();

    expect(send).not.toHaveBeenCalled();
    expect(status.value).toBe("success");
  });
});

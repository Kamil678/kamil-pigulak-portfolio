describe("contact form", () => {
  beforeEach(() => {
    cy.visit("/#contact");
  });

  it("validates the fields before sending", () => {
    cy.contains("button", "Send message").click();
    cy.get("#name").should("have.attr", "aria-invalid", "true").and("be.focused");
    cy.contains("This field is required").should("be.visible");

    cy.get("#email").type("not-an-email").blur();
    cy.contains("Please enter a valid email address").should("be.visible");
  });

  it("sends the message through EmailJS", () => {
    cy.intercept("POST", "https://api.emailjs.com/**", { statusCode: 200, body: "OK" }).as("send");

    cy.get("#name").type("Jan Kowalski");
    cy.get("#email").type("jan@example.com");
    cy.get("#subject").type("Oferta pracy");
    cy.get("#message").type("Dzień dobry, chciałbym porozmawiać o współpracy.");
    cy.contains("button", "Send message").click();

    cy.wait("@send").its("request.body.template_params").should("deep.include", { name: "Jan Kowalski", subject: "Oferta pracy" });
    cy.contains("Your message is on its way").should("be.visible");
    cy.get("#name").should("have.value", "");
  });
});

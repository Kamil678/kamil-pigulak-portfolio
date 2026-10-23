describe("home page", () => {
  beforeEach(() => cy.visit("/"));

  it("shows the hero and every section", () => {
    cy.get("h1").should("contain", "Frontend Developer");
    ["work", "experience", "stack", "about", "contact"].forEach((id) => cy.get(`section#${id}`).should("exist"));
    cy.title().should("contain", "Kamil Pigulak");
  });

  it("switches the language and remembers it", () => {
    cy.contains("button", "pl").click();
    cy.get("html").should("have.attr", "lang", "pl");
    cy.get("h1").should("contain", "specjalizujący się");

    cy.reload();
    cy.get("h1").should("contain", "specjalizujący się");
  });

  it("toggles dark mode", () => {
    cy.get("html").then(($html) => {
      const wasDark = $html.hasClass("dark");
      cy.get('button[aria-label*="theme"]').click();
      cy.get("html").should(wasDark ? "not.have.class" : "have.class", "dark");
    });
  });

  it("scrolls to a section from the navigation", () => {
    cy.viewport(1280, 800);
    cy.get('nav[aria-label="Main navigation"]').contains("a", "Contact").click();
    cy.get("#contact").should(($section) => {
      expect($section[0].getBoundingClientRect().top).to.be.lessThan(200);
    });
  });

  it("links the CV as a downloadable PDF", () => {
    cy.get('a[download][href$=".pdf"]')
      .first()
      .then(($link) => cy.request($link.attr("href")).its("headers.content-type").should("contain", "pdf"));
  });
});

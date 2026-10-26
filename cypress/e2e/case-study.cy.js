describe("case studies", () => {
  it("opens a case study from the project list and goes back", () => {
    cy.visit("/");
    cy.get("#work article").first().find("h3 a").click();

    cy.location("pathname").should("match", /^\/work\//);
    cy.get("h1").should("be.visible");
    cy.contains("h2", "Approach").should("exist");
    cy.title().should("contain", "Case study");
    cy.get('link[rel="canonical"]')
      .should("have.attr", "href")
      .and("match", /\/work\//);

    cy.contains("a", "All projects").click();
    cy.location("pathname").should("eq", "/");
    cy.location("hash").should("eq", "#work");
  });

  it("loads a case study directly by its URL", () => {
    cy.visit("/work/soft-loft");
    cy.get("h1").should("contain", "Soft Loft");
  });

  it("shows the 404 page for unknown routes and projects", () => {
    cy.visit("/does-not-exist");
    cy.get("h1").should("contain", "Page not found");

    cy.visit("/work/unknown-project");
    cy.get("h1").should("contain", "Page not found");
  });
});

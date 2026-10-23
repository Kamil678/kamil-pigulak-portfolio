// Start every test in English unless the test itself switches the language.
Cypress.on("window:before:load", (win) => {
  win.localStorage.setItem("locale", win.localStorage.getItem("locale") ?? "en");
});

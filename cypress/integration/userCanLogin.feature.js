describe("User can log in, when clicking the 'my reQuest' link", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "**/auth/*",
      response: "fixture:user/successful_login.json",
      headers: {
        uid: "user@mail.com",
      },
    });
    cy.route({
      method: "GET",
      url: "**/auth/*",
      response: "fixture:user/successful_login.json",
      headers: {
        uid: "user@mail.com",
      },
    });
    cy.route({
      method: "DELETE",
      url: "**/auth/*",
      response: "fixture:user/logout.json",
      headers: {
        uid: "user@mail.com",
      },
    });
    cy.visit("/");
    cy.get("#myrequest-home-link").click();
  });

  it("successfully, entering correct credentials", () => {
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("password");
      cy.get("#submit-btn").contains("Submit").click();
    });
    cy.get("#welcome-and-logout").within(() => {
      cy.get("p").should("contain", "user@mail.com");
      cy.get("button#logout").should("be.visible");
    });
  });

  it("unsuccessfully, with invalid credentials", () => {
    cy.route({
      method: "POST",
      url: "**/auth/*",
      response: "fixture:user/unsuccessful_login.json",
      headers: {
        uid: "user@mail.com",
      },
      status: 400,
    });
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("wrongpassword");
      cy.get("#submit-btn").contains("Submit").click();
      cy.get("#error-message").should(
        "contain",
        "Invalid login credentials. Please try again."
      );
    });
  });
  it("successfully logs out", () => {
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("password");
      cy.get("#submit-btn").contains("Submit").click();
    });
    cy.get("#welcome-and-logout").within(() => {
      cy.get("button#logout").click();
      cy.get("button#logout").should("not.exist");
      cy.get("p").should("not.contain", "user@mail.com");
    });
  });
});

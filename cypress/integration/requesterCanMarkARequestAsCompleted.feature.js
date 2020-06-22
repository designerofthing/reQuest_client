describe("Requested can mark a request as completed", () => {
  beforeEach(() => {
    cy.stubMain();
    cy.route({
      method: "GET",
      url: "**/my_request/requests",
      response: "fixture:requests/list_of_my_requests.json",
      headers: {
        uid: "me@mail.com",
      },
    });
    cy.route({
      method: "PUT",
      url: "**/my_request/requests/*",
      response: { message: "Request completed" },
      headers: {
        uid: "me@mail.com",
      },
    });

    cy.login();
    cy.get("#myrequest-home-link").click();
    cy.get("#requests-link").click();
  });
  describe("should have a quest completed button and can complete request", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "**/my_request/requests/*",
        response:
          "fixture:requests/another_active_specific_request_with_offer.json",
        headers: {
          uid: "me@mail.com",
        },
      });
    });
    it("have complete button", () => {
      cy.get("#active-link").click();
      cy.get("#my-list").should("contain", "Fix the fixtures in the app");
      cy.get("#request-5").click();
      cy.get("#quest-completed").should("exist");
    });
    it("can complete request", () => {
      cy.get("#active-link").click();
      cy.get("#request-5").click();
      cy.get("#quest-completed").click();
      cy.get("#completed-message").should("contain", "Request completed");
    });
  });
});

describe("User can view their active reQuests", () => {
  beforeEach(() => {
    cy.stubMain();
    cy.route({
      method: "GET",
      url: "**/my_request/requests*",
      response: "fixture:requests/list_of_my_requests.json",
      headers: {
        uid: "me@mail.com",
      },
    });
    cy.route({
      method: "GET",
      url: "**/my_request/requests/5",
      response: "fixture:requests/active_specific_request_with_offer.json",
      headers: {
        uid: "me@mail.com",
      },
    });
    cy.route({
      method: "GET",
      url: "**/my_request/requests/6",
      response: "fixture:requests/another_active_specific_request_with_offer.json",
      headers: {
        uid: "me@mail.com",
      },
    })
    cy.login();
    cy.get("#myrequest-home-link").click();
    cy.wait(500)
    cy.get("#requests-link").click();
  });

  it('in a list, by navigating to "active reQuests"', () => {
    cy.get("#active-link").click();
    cy.get("#request-5").within(() => {
      cy.get(".header").should("contain", "Fix the fixtures in the app");
    });
    cy.get("#request-6").within(() => {
      cy.get(".header").should(
        "contain",
        "Copy fixtures and then copy them again"
      );
    });
  });

  it("can view a specific reQuest and its offer message", () => {
    cy.get("#active-link").click();
    cy.get("#request-5").click();
    cy.get("#request-description-5").should("be.visible");
    cy.get("#offers > .cards > .ui > .content > .meta").should(
      "contain",
      "helper@mail.com"
    );
    cy.get("#offer-message").should(
      "contain",
      "I can help you with this, and I'm probably the first to offer my help"
    );
  });

  it("when a second reQuest is clicked, it's expanded instead of the first", () => {
    cy.get("#active-link").click();
    cy.get("#request-5").click();
    cy.wait(800)
    cy.get("#request-6").click();
    cy.get("#request-description-6").should("be.visible");
    cy.get("#offers > .cards > .ui > .content > .meta").should(
      "contain",
      "offerer@mail.com"
    );
    cy.get("#offer-message").should(
      "contain",
      "I can copy the fixtures, I'm fast"
    );
  })

  it("clicking a reQuest a second time makes it collapse", () => {
    cy.get("#active-link").click();
    cy.get("#request-5").click();
    cy.wait(800)
    cy.get("#request-5").click();
    cy.get("#request-description-6").should("not.be.visible");
  })

  it("when navigating to another tab, the active reQuest and message disappears", () => {
    cy.get("#active-link").click();
    cy.get("#request-5").click();
    cy.get("#request-description-5").should("be.visible");
    cy.get("#offers > .cards > .ui > .content > .meta").should(
      "contain",
      "helper@mail.com"
    );
    cy.get("#offer-message").should("be.visible");
    cy.get("#pending-link").click();
    cy.get("#request-description-5").should("not.be.visible");
    cy.get("#offer-message").should("not.be.visible");
  })
});

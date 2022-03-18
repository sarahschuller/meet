import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  let AppWrapper;

    // Scenario 1
  test("An event element is collapsed by default.", ({ given, when, then }) => {
    given("the user is on the main page of the app", async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
    });

    when("nothing is selected", () => {
      expect(AppWrapper.find(".event__detailsButton")).toHaveLength(2);
    });

    then("the event element will collapse.", () => {
      expect(AppWrapper.find(".event__moreDetails")).toHaveLength(0);
    });
  });

    // Scenario 2
  test("User can expand an event to see its details", ({ given, when, then }) => {
    given("the user wants to see event details", async () => {
      AppWrapper = await mount(<App />);
    });

    when("the user selects and event", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event__detailsButton")).toHaveLength(2);
      AppWrapper.find(".event__detailsButton").at(0).simulate("click");
    });

    then("details about the event will expand", () => {
      expect(AppWrapper.find(".event__moreDetails")).toHaveLength(1);
    });
  });

// Scenario 3
  test("User can collapse an event to hide its details", ({ given, when, then }) => {
    given("the user wants to hide an event's details", async () => {
        AppWrapper = await mount(<App />);
        AppWrapper.update();
        AppWrapper.find(".event__detailsButton").at(0).simulate("click");
        expect(AppWrapper.find(".event__moreDetails")).toHaveLength(1);
    });

    when("the user selects an expanded event", () => {
        AppWrapper.find(".event__detailsButton").at(0).simulate("click");
    });

    then("the details about the event will collapse", () => {
        expect(AppWrapper.find(".event__moreDetails")).toHaveLength(0);
    });
  });
});
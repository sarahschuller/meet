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

    when("an event is displayed", () => {
      expect(AppWrapper.find(".event__detailsButton")).toHaveLength(2);
    });

    then("the event details will be collapsed.", () => {
      expect(AppWrapper.find(".event__moreDetails")).toHaveLength(0);
    });
  });
  
});
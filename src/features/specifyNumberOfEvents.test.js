import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";

const feature = loadFeature("./src/features/SpecifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
    let AppWrapper;

    // Scenario 1
    test("When user hasn’t specified a number, 30 is the default number.", ({
        given,
        when,
        then,
      }) => {
        given("the user is on the main page of the app", async () => {
          AppWrapper = await mount(<App />);
        });
    
        when("the user hasn’t specified a number of events", () => {
          AppWrapper.update();
        });
    
        then("30 events will be seen by default", () => {
          expect(AppWrapper.find(".event")).toHaveLength(2);
        });
      });
});
import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";

const feature = loadFeature("./src/features/SpecifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
    let AppWrapper;

    // Scenario 1
    test("When user hasn’t specified a number, 30 is the default number.", ({ given, when, then, }) => {
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

    // Scenario 2
    test("User can change the number of events they want to see.", (
        { given, when, then }) => {
        given("the user wants to change the number of events to be displayed", async () => {
          AppWrapper = await mount(<App />);
        });
    
        when(
          "the user sets a number of events they want to see",
          () => {
            AppWrapper.update();
            const eventObject = { target: { value: 1 } };
            AppWrapper.find(".numberOfEvents__input").simulate("change", eventObject);
          }
        );
    
        then("this number of events will be displayed", () => {
          AppWrapper.update();
          expect(AppWrapper.find(".event")).toHaveLength(1);
        });
      });
    });
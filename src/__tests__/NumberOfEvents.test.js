import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;

  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("render text input", () => {
    expect(NumberOfEventsWrapper.find(".numberOfEvents")).toHaveLength(1);
  });

  test("change state when number input changes", () => {
    NumberOfEventsWrapper.setState({ numberOfEvents: "30" });
    NumberOfEventsWrapper.find(".numberOfEvents").simulate("change", {
      target: { value: "10" },
    });
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toEqual("10");
  });
});
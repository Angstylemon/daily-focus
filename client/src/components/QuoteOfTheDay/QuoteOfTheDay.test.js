import React from "react";
import { shallow } from "enzyme";
import ShallowRenderer from "react-test-renderer/shallow";

import QuoteOfTheDay from "../QuoteOfTheDay";

let component;

beforeEach(() => {
    component = shallow(<QuoteOfTheDay />);
});

test("it renders correctly", () => {
    const shallowRenderer = new ShallowRenderer();
    const snapshotComponent = shallowRenderer.render(<QuoteOfTheDay />);
    expect(snapshotComponent).toMatchSnapshot();
});

// need to do tests with the button click changes

import React from "react";
import { shallow } from "enzyme";
import ShallowRenderer from "react-test-renderer/shallow";

import QuoteContent from "../QuoteContent";

let component;

function setIsSwitchingSubject(boolean) {
    return boolean;
}

beforeEach(() => {
    component = shallow(
        <QuoteContent
            text="Loren Ipsum"
            author="Dolor"
            setIsSwitchingSubject={setIsSwitchingSubject}
        />
    );
});

test("it renders correctly", () => {
    const shallowRenderer = new ShallowRenderer();
    const snapshotComponent = shallowRenderer.render(
        <QuoteContent
            text="Loren Ipsum"
            author="Dolor"
            setIsSwitchingSubject={setIsSwitchingSubject}
        />
    );
    expect(snapshotComponent).toMatchSnapshot();
});

// need to do tests with the button click changes

import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/modules";
import "../../test/setupTests";

import About from "./About";

/**
 * Functional React component for congrats message
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */

const setup = () => {
    return shallow(<About />);
};

test("component renders OK", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-about");
    expect(component.length).toBe(1);
});

import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/modules";
import "../../test/setupTests";

import DocCard from "./DocCard";

const defaultProps = {
    id: "1",
    category: "оплата",
    title: "оплата 1",
    date: "01/01/1990",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a felis vitae ipsum dignissim",
    screenshot: "https://www.google.com",
    file: "https://www.google.com"
};

/**
 * Functional React component for congrats message
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */

const setup = (props: object = {}) => {
    return shallow(<DocCard {...props} />);
};

test("component renders OK", () => {
    const wrapper = setup(defaultProps);
    const component = findByTestAttr(wrapper, "component-document");
    expect(component.length).toBe(1);
});
test("component returns null with no document", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-document");
    expect(component.length).toBe(0);
});

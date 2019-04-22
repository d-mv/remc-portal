import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/modules";
// import { findByTestAttr, checkProps } from "../../test/modules";
import "../../test/setupTests";

import Documents from "./Documents";

const defaultProps = {
    categories: ["оплата", "заявления", "голосования", "уставные"],
    documents: [
        {
            id: "1",
            category: "оплата",
            title: "оплата 1",
            date: "01/01/1990",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a felis vitae ipsum dignissim",
            screenshot: "https://www.google.com",
            file: "https://www.google.com"
        },
        {
            id: "2",
            category: "оплата",
            title: "оплата 2",
            date: "01/01/1990",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a felis vitae ipsum dignissim",
            screenshot: "https://www.google.com",
            file: "https://www.google.com"
        },
        {
            id: "3",
            category: "заявления",
            title: "заявления 1",
            date: "01/01/1990",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a felis vitae ipsum dignissim",
            screenshot: "https://www.google.com",
            file: "https://www.google.com"
        },
        {
            id: "4",
            category: "голосования",
            title: "голосования 1",
            date: "01/01/1990",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a felis vitae ipsum dignissim",
            screenshot: "https://www.google.com",
            file: "https://www.google.com"
        },
        {
            id: "5",
            category: "уставные",
            title: "уставные 1",
            date: "01/01/1990",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a felis vitae ipsum dignissim",
            screenshot: "https://www.google.com",
            file: "https://www.google.com"
        }
    ]
};

/**
 * Functional React component for congrats message
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */

const setup = (props: any = { categories: [], documents: [] }) => {
    return shallow(<Documents {...props} />);
};

describe("component works fine without documents", () => {
    let wrapper: any;
    beforeEach(() => {
        wrapper = setup();
    });
    test("component renders OK", () => {
        const component = findByTestAttr(wrapper, "component-documents");
        expect(component.length).toBe(1);
    });
    test("component renders message, if no news supplied", () => {
        const component = findByTestAttr(wrapper, "message-documents");
        expect(component.text().length).not.toBe(0);
    });
});

test("component renders documents, if supplied", () => {
    const wrapper = setup(defaultProps);
    const componentsNodes = findByTestAttr(wrapper, "component-document-card");
    expect(componentsNodes.length).toBe(
        Object.keys(defaultProps.documents).length
    );
});

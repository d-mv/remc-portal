import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/modules";
// import { findByTestAttr, checkProps } from "../../test/modules";
import "../../test/setupTests";

import News from "./News";

const defaultProps = [
    {
        id: "1",
        title: "news 1",
        date: "01/01/1990",
        source: "Newspaper #1",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a felis vitae ipsum dignissim tincidunt sed consectetur ligula. Vestibulum risus metus, sodales nec tincidunt vel, luctus ut nisi. Nunc et orci vehicula, vulputate tellus vel, mattis tellus. Aenean vel turpis sed diam hendrerit condimentum. Maecenas elementum nisl nec metus consectetur dapibus. Curabitur id aliquet risus. Sed bibendum augue sed metus aliquam, vel efficitur ex euismod. Donec neque magna, lacinia sed lacinia auctor, fermentum congue justo. Curabitur sit amet mi elementum, molestie urna eu, lacinia arcu. Cras vel ante diam. Aenean imperdiet orci et libero auctor euismod. ",
        link: "https://www.google.com"
    },
    {
        id: "2",
        title: "news 1",
        date: "01/01/1990",
        source: "Newspaper #1",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a felis vitae ipsum dignissim tincidunt sed consectetur ligula. Vestibulum risus metus, sodales nec tincidunt vel, luctus ut nisi. Nunc et orci vehicula, vulputate tellus vel, mattis tellus. Aenean vel turpis sed diam hendrerit condimentum. Maecenas elementum nisl nec metus consectetur dapibus. Curabitur id aliquet risus. Sed bibendum augue sed metus aliquam, vel efficitur ex euismod. Donec neque magna, lacinia sed lacinia auctor, fermentum congue justo. Curabitur sit amet mi elementum, molestie urna eu, lacinia arcu. Cras vel ante diam. Aenean imperdiet orci et libero auctor euismod. ",
        link: "https://www.google.com"
    }
];

/**
 * Functional React component for congrats message
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */

const setup = (props: any = { news: [] }) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<News {...setupProps} />);
};

describe("component works fine without news", () => {
    let wrapper: any;
    beforeEach(() => {
        wrapper = setup();
    });
    test("component renders OK", () => {
        const component = findByTestAttr(wrapper, "component-news");
        expect(component.length).toBe(1);
    });
    test("component renders message, if no news supplied", () => {
        const component = findByTestAttr(wrapper, "message-news");
        expect(component.text().length).not.toBe(0);
    });
});

test("component renders news, if supplied", () => {
    const wrapper = setup({ news: defaultProps });
    const componentsNodes = findByTestAttr(wrapper, "component-news-card");
    expect(componentsNodes.length).toBe(defaultProps.length);
});

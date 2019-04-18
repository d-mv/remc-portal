import React from "react";

import NavButton from "./NavButton";
import * as NavBar from "../styles/NavBar";

interface IProps {
  active: string;
  toggle: any;
  sections: Array<string>;
}

class Navigation extends React.Component<IProps> {
  render() {
    const { active } = this.props;
    const { toggle } = this.props;
    return (
      <NavBar.Desktop>
        {this.props.sections.map(section => {
          const button =
            section === active ? (
              <NavButton
                active
                desktop
                section={section}
                key={section}
                toggle={toggle}
              />
            ) : (
              <NavButton
                desktop
                section={section}
                key={section}
                toggle={toggle}
              />
            );
          return button;
        })}
      </NavBar.Desktop>
    );
  }
}

export default Navigation;

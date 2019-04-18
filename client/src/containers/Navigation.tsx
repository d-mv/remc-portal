import React from "react";

import NavButton from "../components/NavButton";
import * as NavBar from "../styles/NavBar";

interface IProps {
  active: string;
  toggle: any;
}
const sections = ["главная", "новости", "документы", "о нас"];

class Navigation extends React.Component<IProps> {
  render() {
    const { active } = this.props;
    const { toggle } = this.props;
    return (
      <NavBar.Desktop>
        {sections.map(section => {
          const button =
            section === active ? (
              <NavButton
                active
                section={section}
                key={section}
                toggle={toggle}
              />
            ) : (
              <NavButton section={section} key={section} toggle={toggle} />
            );
          return button;
        })}
      </NavBar.Desktop>
    );
  }
}

export default Navigation;

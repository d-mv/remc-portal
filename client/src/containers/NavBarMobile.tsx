import React from "react";

import NavButton from "../components/NavButton";
import NavBarMenu from "../components/NavBarMenu";

import * as NavBar from "../styles/NavBar";

interface IProps {
  active: string;
  toggle: any;
  sections: Array<string>;
}

interface IState {
  sections: Array<string>;
  menuOpen: boolean;
}

class NavBarMobile extends React.Component<IProps, IState> {
  state = {
    sections: this.props.sections,
    menuOpen: false
  };

  toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  chooseSection = (e: React.MouseEvent<HTMLButtonElement>, section: string) => {
    this.props.toggle(section);
    this.toggleMenu(e);
  };
  render() {
    const { active } = this.props;
    const sectionsForMenu = this.state.sections.filter(
      section => section !== this.props.active
    );
    return (
      <NavBar.Mobile>
        <NavButton mobile active toggle={this.toggleMenu} section={active} />
        {this.state.menuOpen ? (
          <NavBarMenu choose={this.chooseSection} sections={sectionsForMenu} />
        ) : null}
      </NavBar.Mobile>
    );
  }
}

export default NavBarMobile;

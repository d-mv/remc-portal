import React from "react";

import NavBarMobile from "./NavBarMobile";
import NavBarDesktop from "../components/NavBarDesktop";
interface IProps {
  active: string;
  toggle: any;
}

interface IState {
  desktop: boolean;
  sections: Array<string>;
}

class Navigation extends React.Component<IProps, IState> {
  state = {
    sections: ["главная", "новости", "документы", "о нас"],
    desktop: true
  };
  componentWillMount() {
    if (window.screen.width < 500) {
      this.setState({
        desktop: false
      });
    }
  }
  render() {
    const { active } = this.props;
    const { toggle } = this.props;
    return this.state.desktop ? (
      <NavBarDesktop
        active={active}
        toggle={toggle}
        sections={this.state.sections}
      />
    ) : (
      <NavBarMobile
        active={active}
        toggle={toggle}
        sections={this.state.sections}
      />
    );
  }
}

export default Navigation;

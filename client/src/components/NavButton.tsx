import React from "react";

import * as NavButtonStyle from "../styles/NavBarButton";

interface IProps {
  section: string;
  active?: boolean;
  mobile?: boolean;
  desktop?: boolean;
  toggle: any;
}

class NavButton extends React.Component<IProps> {
  private handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { toggle } = this.props;
    const { section } = this.props;
    toggle(section);
  };
  render() {
    const { active } = this.props;
    const { section } = this.props;
    const { desktop } = this.props;
    const button = active ? (
      <NavButtonStyle.Active
        onClick={event => this.handleClick(event)}
        desktop={desktop}
      >
        <span>{section}</span>
      </NavButtonStyle.Active>
    ) : (
      <NavButtonStyle.NonActive
        onClick={event => this.handleClick(event)}
        desktop={desktop}
      >
        {section}
      </NavButtonStyle.NonActive>
    );

    return button;
  }
}

export default NavButton;

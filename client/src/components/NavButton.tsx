import React from "react";

import * as NavButtonStyle from "../styles/NavButton";

interface IProps {
  section: string;
  active?: boolean;
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

    const button = active ? (
      <NavButtonStyle.Active onClick={this.handleClick}>
        <span>{section}</span>
      </NavButtonStyle.Active>
    ) : (
      <NavButtonStyle.NonActive onClick={this.handleClick}>
        {section}
      </NavButtonStyle.NonActive>
    );

    return button;
  }
}

export default NavButton;

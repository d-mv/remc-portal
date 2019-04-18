import React from "react";

import MenuStyle from "../styles/NavBarMenu";
import WrapperStyle from "../styles/NavBarMenuWrapper";
import ButtonStyle from "../styles/NavBarMenuButton";

interface IProps {
  choose: any;
  sections: Array<string>;
}
class NavBarMenu extends React.Component<IProps> {
  private handleClick = (e: React.MouseEvent<HTMLElement>, section: string) => {
    const { choose } = this.props;
    choose(e, section);
  };
  render() {
    const { sections } = this.props;
    return (
      <WrapperStyle>
        <MenuStyle>
          {sections.map(section => {
            return (
              <ButtonStyle
                key={section}
                onClick={event => this.handleClick(event, section)}
              >
                {section}
              </ButtonStyle>
            );
          })}
        </MenuStyle>
      </WrapperStyle>
    );
  }
}

export default NavBarMenu;

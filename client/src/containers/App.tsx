import * as React from "react";

import Logo from '../styles/Logo'
import Navigation from "./Navigation";
import Main from "../components/Main";
import News from "./News";
import Documents from "./Documents";
import About from "../components/About";

import Display from "../styles/Display";

const App = () => {
  const [section, setSection] = React.useState("главная");
  let sectionToShow = <Main />;

  switch (section) {
    case "новости":
      sectionToShow = <News />;
      break;
    case "документы":
      sectionToShow = <Documents />;
      break;
    case "о нас":
      sectionToShow = <About />;
      break;
  }
  return (
    <Display>
      <Logo />
      <Navigation active={section} toggle={setSection} />
      {sectionToShow}
    </Display>
  );
};

export default App;

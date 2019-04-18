import * as React from "react";

import Navigation from "./containers/Navigation";
import Display from "./styles/Display";

const App = () => {
  const [section, setSection] = React.useState("главная");

  return (
    <Display>
      <Navigation active={section} toggle={setSection} />
    </Display>
  );
};

export default App;

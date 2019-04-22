import * as React from "react";

import Logo from "../styles/Logo";
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
            sectionToShow = (
                <News
                    news={
                        [
                            //       {
                            //   id: "1",
                            //   title: "news 1",
                            //   date: "01/01/1990",
                            //   source: "Newspaper #1",
                            //   text:
                            //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a felis vitae ipsum dignissim tincidunt sed consectetur ligula. Vestibulum risus metus, sodales nec tincidunt vel, luctus ut nisi. Nunc et orci vehicula, vulputate tellus vel, mattis tellus. Aenean vel turpis sed diam hendrerit condimentum. Maecenas elementum nisl nec metus consectetur dapibus. Curabitur id aliquet risus. Sed bibendum augue sed metus aliquam, vel efficitur ex euismod. Donec neque magna, lacinia sed lacinia auctor, fermentum congue justo. Curabitur sit amet mi elementum, molestie urna eu, lacinia arcu. Cras vel ante diam. Aenean imperdiet orci et libero auctor euismod. ",
                            //   link: "https://www.google.com"
                            // }
                        ]
                    }
                />
            );
            break;
        case "документы":
            sectionToShow = <Documents categories={[]} documents={[]} />;
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

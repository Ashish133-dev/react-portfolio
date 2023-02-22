import "./App.css";
import { useState } from "react";

// importing image

import { Contact } from "./components/Contact";
import { DarkMode } from "./components/DarkMode";
import { Footer } from "./Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Project } from "./components/Project";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Scroll } from "./components/Scroll";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  const [showScreen, setShowScreen] = useState("");
  const screens = {
    skills: <Skills />,
    project: <Project />,
    about: <About />,
    contact: <Contact />,
  };
  console.log(screens.about);

  return (
    <div>
      {/* <!-- dark mode button --> */}
      <DarkMode />
      <div className="wrapper">
        {/* <!-- header section --> */}
        <Header setShowScreen={setShowScreen} />
        {!showScreen ? (
          <>
            <Hero />
            {Object.values(screens)}
          </>
        ) : (
          screens[showScreen]
        )}

        <Footer />
        <Scroll />
      </div>
    </div>
  );
}

export default App;

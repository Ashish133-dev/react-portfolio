import "./App.css";
// importing image

import { Contact } from "./components/Contact";
import { DarkMode } from "./components/DarkMode";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Project } from "./components/Project";
import { Skills } from "./components/Skills";
import { Info } from "./components/Info";
import { About } from "./components/About";
import { Scroll } from "./components/Scroll";

function App() {
  return (
    <div>
      {/* <!-- dark mode button --> */}
      <DarkMode />
      <div className="wrapper">
        {/* <!-- header section --> */}
        <Header />
        {/* <!-- hero section --> */}
        <Hero />
        {/* <!-- info section --> */}
        <Info />
        {/* <!-- skills section --> */}
        <Skills />
        {/* <!-- project section --> */}
        <Project />
        {/* <!-- about me section --> */}
        <About />
        {/* <!-- contact section --> */}
        <Contact />
        {/* <!-- footer section --> */}
        <Footer />
        {/* <!-- Scroll button --> */}
        <Scroll />
      </div>
    </div>
  );
}

export default App;

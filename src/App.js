import "./App.css";
// importing image

import { Contact } from "./components/Contact";

import { Hero } from "./components/Hero";
import { Project } from "./components/Project";
import { Skills } from "./components/Skills";

import { About } from "./components/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />

          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

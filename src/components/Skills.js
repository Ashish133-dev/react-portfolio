import React from "react";
import { Info } from "./Info";

export const Skills = () => {
  return (
    <>
      <Info />
      <section className="section3 flex" id="skills">
        <div className="skills-container flex">
          <div className="flex">
            <i className="fa-brands fa-html5"></i> <span>HTML</span>
          </div>
          <div className="flex">
            <i className="fa-brands fa-css3"></i> <span>CSS</span>
          </div>
          <div className="flex">
            <i className="fa-brands fa-square-js"></i> <span>JavaScript</span>
          </div>
          <div className="flex">
            <i className="fa-brands fa-react"></i> <span>React</span>
          </div>
          <div className="flex">
            <i className="fa-brands fa-sass"></i> <span>Sass</span>
          </div>
        </div>
      </section>{" "}
    </>
  );
};

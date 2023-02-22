import React from "react";
import Movie from "../assets/movie.png";
import Contact from "../assets/contact.png";
import Not from "../assets/not.png";

export const Project = () => {
  return (
    <section className="section4 flex" id="projects">
      <h1 className="title">My Projects</h1>

      <div className="projects-container grid">
        <div className="project-card flex">
          <div className="top">
            <img src={Contact} alt="project" />
          </div>

          <div className="bottom">
            <p>January 4, 2023</p>
            <p>Contact-List API using HTML and CSS</p>
          </div>
        </div>
        <div className="project-card flex">
          <div className="top">
            <img src={Movie} alt="project" />
          </div>

          <div className="bottom">
            <p>January 10, 2023</p>
            <p>My movie collection Web Application Built Using React</p>
          </div>
        </div>
        <div className="project-card flex">
          <div className="top">
            <img src={Not} alt="project" />
          </div>

          <div className="bottom">
            <p>January 4, 2023</p>
            <p>Not To Do List Web Application Built Using React</p>
          </div>
        </div>
      </div>
    </section>
  );
};

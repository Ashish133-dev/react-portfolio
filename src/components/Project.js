import React from "react";
import Fruits from "../assets/Fruits.jpg";
import Layout from "./Layout";

export const Project = () => {
  return (
    <Layout>
      <section className="section4 flex" id="projects">
        <h1 className="title">My Projects</h1>

        <div className="projects-container grid">
          <div className="project-card flex">
            <div className="top">
              <img src={Fruits} alt="project" />
            </div>

            <div className="bottom">
              <p>January 4, 2023</p>
              <p>E-commerce Full Stack Web Application Built Using React</p>
            </div>
          </div>
          <div className="project-card flex">
            <div className="top">
              <img src={Fruits} alt="project" />
            </div>

            <div className="bottom">
              <p>January 4, 2023</p>
              <p>E-commerce Full Stack Web Application Built Using React</p>
            </div>
          </div>
          <div className="project-card flex">
            <div className="top">
              <img src={Fruits} alt="" />
            </div>

            <div className="bottom">
              <p>January 4, 2023</p>
              <p>E-commerce Full Stack Web Application Built Using React</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

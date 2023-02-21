import React from "react";
import Ashish from "../assets/Ashish.png";
import Layout from "./Layout";

export const About = () => {
  return (
    <Layout>
      <section className="section5 flex" id="about">
        <h1 className="title">About me</h1>

        <div className="about-container flex">
          <div className="left flex">
            <div className="bg"></div>
            <img src={Ashish} alt="" />
          </div>

          <div className="right flex">
            <h1>Ashish Upreti</h1>
            <p>
              I grew up in Nepal and am currently located in Sydney, Australia.
            </p>

            <p>Sydney, Australia</p>

            <a href="">Connect with me</a>

            <div className="flex">
              <div className="tag">Interests</div>
              <div>
                <span>Coding</span>
                <span>Reading</span>
                <span>Sports</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

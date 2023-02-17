import React from "react";
import Ashish from "../assets/Ashish.png";
import Resume from "../assets/Resume.pdf";

export const Hero = () => {
  return (
    <>
      <section className="section1 grid" id="home">
        <div className="left">
          <img src={Ashish} alt="" />
        </div>
        <div className="flex-right">
          <div>
            <h2 className="name">Ashish Upreti</h2>
            <p className="tag">Web Developer</p>
          </div>

          <a href={Resume} download="">
            <button>
              Download Resume
              <i className="fa-solid fa-download"></i>
            </button>
          </a>
        </div>
      </section>
    </>
  );
};

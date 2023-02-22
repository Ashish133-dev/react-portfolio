import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-container flex">
        <div className="footer-top flex">
          <div>
            <h3>LINKS</h3>
            <ul className="flex">
              <li>Home</li>
              <li>Skills</li>
              <li>Projects</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3>EXTERNAL LINKS</h3>
            <ul className="flex">
              <li className="links">
                <a href="https://www.youtube.com/">Youtube</a>
              </li>
              <li className="links">
                <a href="https://www.linkedin.com/feed/">LinkedIn</a>
              </li>
              <li className="links">
                <a href="https://github.com/Ashish133-dev/parralax">Github</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom flex">
          <h1>Ashish | Web Developer</h1>
          <p>&copy; | All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

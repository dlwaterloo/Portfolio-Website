import React from "react";

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="row">
          <div className="col-md-6">
            <p>
              I am a computer science student at the University of Waterloo
              with a passion for web development. I enjoy working on both
              front-end and back-end development and love learning new
              technologies.
            </p>
            <p>
              In my free time, I like to work on personal projects and
              contribute to open-source projects. I also enjoy reading books and
              watching movies.
            </p>
          </div>
          <div className="col-md-6">
            <div className="skills">
              <div className="skill">
                <div className="skill-name">HTML/CSS</div>
                <div className="skill-bar">
                  <div className="skill-progress skill-progress-80"></div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-name">JavaScript</div>
                <div className="skill-bar">
                  <div className="skill-progress skill-progress-75"></div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-name">React</div>
                <div className="skill-bar">
                  <div className="skill-progress skill-progress-70"></div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-name">Node.js</div>
                <div className="skill-bar">
                  <div className="skill-progress skill-progress-65"></div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-name">and other things...</div>
                <div className="skill-bar">
                  <div className="skill-progress skill-progress-65"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

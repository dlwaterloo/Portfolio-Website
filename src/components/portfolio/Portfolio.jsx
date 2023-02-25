import React from "react";
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Description of Project 1",
      image: require("../../assets/My website pic.png"),
      github: "https://github.com/dlwaterloo/Portfolio-Website",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description of Project 2",
      image: require("../../assets/placeholder.png"),
      github: "https://github.com/your_username/project2",
    },
  ];

  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <h2 className="section-title">Portfolio</h2>
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4">
              <div className="portfolio-item">
                <div className="portfolio-img">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="portfolio-content">
                  <h3 className="title">{project.title}</h3>
                  <p className="description">{project.description}</p>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <FaGithub className="icon" /> View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

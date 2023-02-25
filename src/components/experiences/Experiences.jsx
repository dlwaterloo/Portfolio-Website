import React from 'react'
import './experiences.css' 
import experience1Image from "../../assets/Best-Crypto-Exchanges.png";
import experience2Image from "../../assets/WIN.png";
import experience3Image from "../../assets/Syn-PD.png";

const experiences = [
  {
    title: "FinanceHorizon",
    description:
      "Crypto Exchange Platform",
    techStack: "React, Node.js, MongoDB",
    date: "Jan 2022 - Present",
    image: experience1Image,
  },
  {
    title: "Share",
    description:
      "Social Media Sharing Platform",
    techStack: "React JS, Tailwind CSS",
    date: "Feb 2023 - Present",
    image: experience2Image,
  },
  {
    title: "SynPage",
    description:
      "Onscreen Guidance Platform",
    techStack: "React, Node.js, Firebase",
    date: "Sept 2022 - Present",
    image: experience3Image,
  },
];

const Experiences = () => {
  return (
    <section>
      <h2>Experiences</h2>
      <div className="experiences-container">
        {experiences.map((experience, index) => (
          <div className="experience-card" key={index}>
            <img src={experience.image} alt={experience.title} />
            <div className="experience-card-content">
              <h3 className="experience-title">{experience.title}</h3>
              <p className="experience-description">{experience.description}</p>
              <p className="experience-tech-stack">{experience.techStack}</p>
              <p className="experience-date">{experience.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;

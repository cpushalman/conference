import React from "react";
import "../components-css/About.css";

const AboutConference = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-photo">
          <img src="Conference.webp" alt="Conference" />
        </div>

        <div className="about-content">
          <h2>About Conference</h2>
          <p>
            The Conference on Disruptive Technologies for Next Gen Computing - 2026 offers 
            a comprehensive platform to explore cutting-edge advancements across diverse 
            fields. Topics include:
          </p>
          <ul className="bullet-center">
            <li>Artificial Intelligence and Machine Learning</li>
            <li>Cloud Computing and Distributed Systems</li>
            <li>Big Data and Data Science</li>
            <li>Internet of Things (IoT)</li>
            <li>Cybersecurity and Privacy</li>
            <li>Quantum Computing</li>
            <li>5G and Next-Generation Wireless Networks</li>
            <li>Robotics and Autonomous Systems</li>
            <li>Virtual Reality (VR) and Augmented Reality (AR)</li>
            <li>Sustainability in Computing and Green Technologies</li>
            <li>Human-Computer Interaction (HCI)</li>
            <li>Emerging Computing Paradigms</li>
            <li>Blockchain and Cryptocurrency</li>
            <li>Advancements in Software Engineering</li>
          </ul>
          <p>
            This conference serves as a hub for showcasing innovative research, emerging 
            technologies, and interdisciplinary applications of computing, fostering 
            collaboration and knowledge sharing among experts and enthusiasts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutConference;

import React from "react";
import "../components-css/About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-photo">
          <img
            src="college photo.png"
          />
        </div>

        <div className="about-content">
          <h2>About PSG College of Technology</h2>
          <p>
            Founded in 1951 by PSG & Sons’ Charities, PSG College of Technology (PSG CT) 
            stands as a premier institution dedicated to excellence in engineering and 
            technology education. Over the decades, PSG CT has nurtured a strong alumni 
            network, with its graduates holding distinguished positions across government, 
            research, and leading global corporations.
          </p>

          <p>
            The college offers 21 undergraduate and 24 postgraduate programmes, spanning 
            Engineering, Technology, Computer Applications, and Applied Sciences. Its 
            commitment to innovation is evident through advanced Centers of Excellence, 
            including TIFAC Core, Virtual Reality Centre, Nano-tool Centre, and several others. 
            With in-campus manufacturing units and robust industry–research collaborations, 
            PSG CT ensures students gain hands-on experience along with academic rigor.
          </p>

          <p>
            Recognized nationally for its impact, PSG CT secured 2nd place in ARIIA 2021 and 
            earned the AICTE-CII Best Industry-linked Institute Award (2012). In 2022, during 
            India’s G20 Presidency, PSG CT was among the 75 selected institutions entrusted 
            with academic and cultural outreach to advance the G20 agenda.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

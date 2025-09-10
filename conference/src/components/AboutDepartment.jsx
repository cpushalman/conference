import React from "react";
import "../components-css/About.css";

const AboutDepartment = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-photo">
          <img src="Department.jpeg" alt="Department" />
        </div>

        <div className="about-content">
          <h2>About Department</h2>
          <p>
            The Department of Computer Science and Engineering, with its dedicated body of 
            well-qualified faculty, technical staff and students, is committed to be an 
            international, multi-disciplinary center of excellence in Computer Science and 
            Engineering through education and research. It has partnerships with other 
            leading Academic Institutions, Government and Industrial sectors. It has 
            acquired generous grants from global organizations like the World Bank, Swiss 
            Development Co-operation for Manpower Development, the Department of Electronics, 
            VSSC, AICTE and the Ministry of Information Technology, DBT, DST, DRDO and UGC. 
            The department carries out consultancy work with organisations like Cloudera, 
            Impiger, Cordys.
          </p>
          <p>
            The Vision of the Department is to become a global leader in education and 
            research in the field of Computer Science & Engineering for societal benefit.
          </p>
          <p>
            The mission of the department is to:
            <ul>
              <li>Develop high quality Computer Science & Engineering graduates with technical and professional skills.</li>
              <li>Foster research to solve real world problems with emerging technologies and social consciousness.</li>
            </ul>
          </p>
          <p>
            The department has state-of-art laboratories in Open source systems, Networks, 
            Software Engineering, Cloud Computing, Embedded Systems and Big Data Analytics. 
            The department also hosts centers of excellence in Assistive Technologies and 
            Artificial Intelligence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutDepartment;

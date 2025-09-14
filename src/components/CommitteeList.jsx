import React, { useEffect, useState } from "react";
import '../components-css/CommitteStyles.css';

export default function CommitteeList() {
  const [members, setMembers] = useState([]);
  const [tech, setTech] = useState([]);
  const [pro, setPro] = useState([]);
  const [org, setOrg] = useState([]);

  useEffect(() => {
    fetch("/data/committee.json")
      .then((res) => res.json())
      .then((data) => setMembers(data))
      .catch((err) => console.error("Failed to load committee data:", err));
  }, []);

  useEffect(() => {
    fetch("/data/techcommittee.json")
      .then((res) => res.json())
      .then((data) => setTech(data))
      .catch((err) => console.error("Failed to load committee data:", err));
  }, []);

  useEffect(() => {
    fetch("/data/procommittee.json")
      .then((res) => res.json())
      .then((data) => setPro(data))
      .catch((err) => console.error("Failed to load committee data:", err));
  }, []);

  useEffect(() => {
    fetch("/data/orgcommittee.json")
      .then((res) => res.json())
      .then((data) => setOrg(data))
      .catch((err) => console.error("Failed to load committee data:", err));
  }, []);

  return (
    <div className="container">
      <h1>ADVISORY COMMITTEE</h1>
      <div className="members-list">
        {members.map((member) => (
          <div key={member.id} className="member-card">
            <img src={member.image} alt={member.name} width="150" />
            <h3>{member.name}</h3>
            <p><strong>{member.designation}</strong></p>
            <p>{member.university}</p>
          </div>
        ))}
      </div>

      <br />
      <h1>TECHNICAL COMMITTEE</h1>
      <div className="members-list">
        {tech.map((member) => (
          <div key={member.id} className="member-card">
            <img src={member.image} alt={member.name} width="150" />
            <h3>{member.name}</h3>
            <p><strong>{member.designation}</strong></p>
            <p>{member.university}</p>
          </div>
        ))}
      </div>

      <br />
      <h1>PROGRAM COMMITTEE</h1>
      <div className="program-hierarchy">
  {pro.length >= 3 && (
    <>
      {/* Patron */}
      <div className="hierarchy-card main-role">
        <h3>Patron</h3>
        <img src={pro[0].image} alt={pro[0].name} />
        <h4>{pro[0].name}</h4>
        <p><strong>{pro[0].designation}</strong></p>
        <p>{pro[0].university}</p>
      </div>

      {/* Co-Patron */}
      <div className="hierarchy-card main-role">
        <h3>Co-Patron</h3>
        <img src={pro[1].image} alt={pro[1].name} />
        <h4>{pro[1].name}</h4>
        <p><strong>{pro[1].designation}</strong></p>
        <p>{pro[1].university}</p>
      </div>

      {/* Organizing Chair */}
      <div className="hierarchy-card main-role">
        <h3>Organizing Chair</h3>
        <img src={pro[2].image} alt={pro[2].name} />
        <h4>{pro[2].name}</h4>
        <p><strong>{pro[2].designation}</strong></p>
        <p>{pro[2].university}</p>
      </div>

      {/* Secretaries Heading */}
      <h2 className="secretaries-heading">Organizing Secretaries</h2>

      {/* Organizing Secretaries Grid */}
      <div className="organizing-secretaries">
        {pro.slice(3).map((member) => (
          <div key={member.id} className="hierarchy-card secretary-card">
            <img src={member.image} alt={member.name} />
            <h4>{member.name}</h4>
            <p><strong>{member.designation}</strong></p>
            <p>{member.university}</p>
          </div>
        ))}
      </div>
    </>
  )}
</div>



      <br />
      <h1>ORGANIZING COMMITTEE</h1>
      <div className="committee-box">
        {org.map((member) => (
          <div key={member.id} className="committee-row">
            <span>{member.name}</span>
            <span>{member.designation}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

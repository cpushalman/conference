import React, { useEffect, useState } from "react";
import '../components-css/CommitteStyles.css'

export default function CommitteeList() {
  const [members, setMembers] = useState([]);
  const [tech,setTech]=useState([]);
  const [pro,setPro]=useState([]);

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
      </div><br />
      <h1>ADVISORY COMMITTEE</h1>
      <div className="members-list">
        {tech.map((member) => (
          <div key={member.id} className="member-card">
            <img src={member.image} alt={member.name} width="150" />
            <h3>{member.name}</h3>
            <p><strong>{member.designation}</strong></p>
            <p>{member.university}</p>
          </div>
        ))}
      </div><br />

      <h1>PROGRAM COMMITTEE</h1>
      <div className="members-list">
        {pro.map((member) => (
          <div key={member.id} className="member-card">
            <img src={member.image} alt={member.name} width="150" />
            <h3>{member.name}</h3>
            <p><strong>{member.designation}</strong></p>
            <p>{member.university}</p>
          </div>
        ))}
      </div><br />

    </div>
  );
}

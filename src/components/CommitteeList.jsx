import React, { useEffect, useState } from "react";

export default function CommitteeList() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("/data/committee.json")
      .then((res) => res.json())
      .then((data) => setMembers(data))
      .catch((err) => console.error("Failed to load committee data:", err));
  }, []);

  return (
    <div className="container">
      <h1>Committee Members</h1>

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
    </div>
  );
}

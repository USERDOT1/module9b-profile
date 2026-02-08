import React from "react";

const SkillList = ({ skills }) => {
    return (
        <div
        style={{
            maxWidth: "320px",
            margin: "0 auto",
            padding: "16px",
            borderRadius: "12px",
            backgroundColor: "#f18f01",
            fontFamily: "Arial, sans-serif",
            color: "#0b3c5d",
            textAlign: "center"
        }}
        >
        <h2
        style={{
            margin: "0 0 12px 0",
            fontSize: "18px"
        }}
        >
        Skills
        </h2>
        <ul
        style={{
            listStyle: "none",
            padding: "0",
            margin: "0"
        }}
        >
        {skills.map((skill) => (
            <li
            key={skill}
            style={{
                padding: "6px 0",
                fontSize: "14px"
            }}
            >
            {skill}
            </li>
        ))}
        </ul>
        </div>
    );
};

export default SkillList;

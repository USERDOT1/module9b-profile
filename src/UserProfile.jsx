import React from "react";

const UserProfile = () => {
    const name = "Samuel Holden";
    const bio = "Game designer and developer.";

    return (
        <div
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "centre",
            justifyContent: "centre",
            maxWidth: "320px",
            margin: "40px auto",
            padding: "20px",
            borderRadius: "12px",
            backgroundColor: "#0b3c5d",
            fontFamily: "Arial, sans-serif",
            textAlign: "centre",
            color: "#ffffff"
        }}
        >
        <img
        src="https://t4.ftcdn.net/jpg/05/29/61/37/360_F_529613760_ZN7wI9c62MyPeFC8ioliQ2wrVohVuRey.jpg"
        alt="User profile"
        style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "16px",
            border: "4px solid #f18f01"
        }}
        />
        <h1
        style={{
            fontSize: "22px",
            margin: "0 0 8px 0",
            color: "#f18f01"
        }}
        >
        {name}
        </h1>
        <p
        style={{
            fontSize: "14px",
            margin: "0",
            lineHeight: "1.5",
            color: "#d9e6f2"
        }}
        >
        {bio}
        </p>
        </div>
    );
};

export default UserProfile;

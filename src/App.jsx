import React from "react";
import UserProfile from "./UserProfile";
import SkillList from "./SkillList";

const App = () => {
    return (
        <div>
        <UserProfile
        name="Samuel Holden"
        bio="Game designer and developer"
        image="https://t4.ftcdn.net/jpg/05/29/61/37/360_F_529613760_ZN7wI9c62MyPeFC8ioliQ2wrVohVuRey.jpg"
        />
        <SkillList
        skills={[
            "Game design",
            "Javascript fundementals",
            "Python coding",
            "Cloud computing work"
        ]}
        />
        </div>
    );
};

export default App;

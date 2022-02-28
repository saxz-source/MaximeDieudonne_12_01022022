import React from "react";
import ProfileCustomCongrat from "./ProfileCustomCongrat";
import ProfileName from "./ProfileName";
import "./profileCustomMessage.css"

const ProfileWelcomeMessage = ({userName}) => {
    return (
        <div>
            <p className="helloSentence">
                Bonjour <ProfileName userName={userName} />
            </p>
            <ProfileCustomCongrat />
        </div>
    );
};

export default ProfileWelcomeMessage;

import React from "react";
import ProfileCustomCongrat from "./ProfileCustomCongrat";
import ProfileName from "./ProfileName";
import "./profileCustomMessage.css";
import PropTypes from "prop-types";

const ProfileWelcomeMessage = ({ userName }) => {
  return (
    <div>
      <p className="helloSentence">
        Bonjour <ProfileName userName={userName} />
      </p>
      <ProfileCustomCongrat />
    </div>
  );
};

ProfileWelcomeMessage.prototype = {
  /**
   * The name of the connected user @type {string}
   */
  userName: PropTypes.string.isRequired,
};

export default ProfileWelcomeMessage;

import React from "react";
import PropTypes from "prop-types";

const ProfileName = ({ userName }) => {
  return <span className="firstName">{userName}</span>;
};

ProfileName.prototype = {
  /**
   * The name of the connected user @type {string}
   */
  userName: PropTypes.string.isRequired,
};

export default ProfileName;

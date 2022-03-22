import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

/** @returns  the name of the user in a span element */
const ProfileName = ({ userName }) => {
    const [name, setName] = useState("");

    useEffect(() => {
        setName(userName);
    }, [userName]);

    return <span className="firstName">{name}</span>;
};

ProfileName.proptype = {
    /**
     * The name of the connected user @type {string}
     */
    userName: PropTypes.string.isRequired,
};

export default ProfileName;

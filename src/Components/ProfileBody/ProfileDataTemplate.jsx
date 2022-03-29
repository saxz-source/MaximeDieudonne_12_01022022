import React, { useEffect, useState } from "react";
import GraphActivitiesType from "./GraphActivitiesType/GraphActivitiesType";
import GraphAverageSessions from "./GraphAverageSessions/GraphAverageSessions";
import GraphDaylyActivities from "./GraphDaylyActivities/GraphDaylyActivities";
import GraphScore from "./GraphScore/GraphScore";
import PropTypes from "prop-types";

/** @returns the template with the four graphs */
const ProfileDataTemplate = ({ userId, todayScore }) => {
    return (
        <section className="profilDataTemplate">
            <GraphDaylyActivities userId={userId} />
            <div className="threeGraphs">
                <GraphAverageSessions userId={userId} />
                <GraphActivitiesType userId={userId} />
                <GraphScore userId={userId} todayScore={todayScore} />
            </div>
        </section>
    );
};

ProfileDataTemplate.propTypes = {
    /**
     * The id of the connected user @type {number}
     */
    userId: PropTypes.number.isRequired,
    /**
     * The score of the day @type {number}
     */
    todayScore: PropTypes.number,
};

export default ProfileDataTemplate;

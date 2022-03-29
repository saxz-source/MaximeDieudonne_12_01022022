import React from "react";
import RechartGraphScore from "./RechartGraphScore";
import "./graphScore.css";
import PropTypes from "prop-types";

/** @returns the score graph with its title */
const GraphScore = ({ todayScore }) => {
    return (
        <div className="graphScoreZone">
            <h2>Score</h2>
            <div className="circleWithText">
                <span className="rate"> {todayScore * 100}% </span>
                <span className="addedInfos">
                    de votre <br /> objectif
                </span>
            </div>
            <RechartGraphScore todayScore={todayScore} />
        </div>
    );
};

GraphScore.propTypes = {
    /** The score of the user @type {number} */
    todayScore: PropTypes.number,
};

export default GraphScore;

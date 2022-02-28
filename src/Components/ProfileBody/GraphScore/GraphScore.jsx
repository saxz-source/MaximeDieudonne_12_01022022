import React from "react";
import RechartGraphScore from "./RechartGraphScore";
import "./graphScore.css";

const GraphScore = ({ todayScore, screenWidth }) => {
    return (
        <div className="graphScoreZone">
            <h2>Score</h2>
            <RechartGraphScore todayScore={todayScore}   screenWidth={screenWidth} />
        </div>
    );
};

export default GraphScore;

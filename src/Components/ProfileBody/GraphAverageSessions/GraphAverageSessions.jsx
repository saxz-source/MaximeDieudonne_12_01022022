import React, { useEffect, useState } from "react";
import { getAverageSessions } from "../../../API/APICalls";
import LineChartAverageSessions from "./LineChartAverageSessions";
import "./graphAverageSessions.css";
import PropTypes from "prop-types";


/** @returns the zone where is displayed the Average session graph */
const GraphAverageSessions = ({ userId }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        getAverageSessions(userId).then((res) => {
            console.log(res.data.data.sessions);
            setData(res.data.data.sessions);
        });
    }, [userId]);

    return (
        <div className="averageSessionsZone">
            <h2 className="averageChartTitle">Duréee moyenne des sessions</h2>
            <LineChartAverageSessions
                sessionData={data}
            />
        </div>
    );
};

export default GraphAverageSessions;

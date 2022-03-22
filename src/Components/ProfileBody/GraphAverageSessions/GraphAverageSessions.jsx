import React, { useEffect, useState } from "react";
import { getAverageSessions } from "../../../API/APICalls";
import LineChartAverageSessions from "./LineChartAverageSessions";
import "./graphAverageSessions.css";
import PropTypes from "prop-types";
import { SessionData } from "../../../classes/SessionData";

/** @returns the zone where is displayed the Average session graph */
const GraphAverageSessions = ({ userId }) => {
    /** The data for sessions @type {SessionData[]} */
    const [sessionDatas, setSessionDatas] = useState(null);

    useEffect(() => {
        getAverageSessions(userId).then((res) => {
            const dataSet = res.data.data.sessions.map((s) => {
                return new SessionData(s);
            });
            console.log(res.data.data.sessions);
            setSessionDatas(dataSet);
        });
    }, [userId]);

    return (
        <div className="averageSessionsZone">
            <h2 className="averageChartTitle">Duréee moyenne des sessions</h2>
            <LineChartAverageSessions sessionDatas={sessionDatas} />
        </div>
    );
};

GraphAverageSessions.propTypes = {
    userId: PropTypes.number.isRequired,
};

export default GraphAverageSessions;

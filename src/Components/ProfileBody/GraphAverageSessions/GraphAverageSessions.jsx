import React, { useEffect, useState } from "react";
import { getAverageSessions } from "../../../API/APICalls";
import LineChartAverageSessions from "./LineChartAverageSessions";
import "./graphAverageSessions.css";

const GraphAverageSessions = ({ userId, screenWidth }) => {
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
                screenWidth={screenWidth}
            />
        </div>
    );
};

export default GraphAverageSessions;

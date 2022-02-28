import React, { useEffect, useState } from "react";
import { getDaylyActivities } from "../../../API/APICalls";
import RechartDaylyActivities from "./RechartDaylyActivities";
import "./graphDaylyActivities.css";

const GraphDaylyActivities = ({ userId, screenWidth }) => {
    const [daylyData, setDaylyData] = useState(null);
    const [chartWidth, setChartWidth] = useState("37.5rem");

    useEffect(() => {
        getDaylyActivities(userId).then((res) => {
            //  const parsedDatas = convertActivitiesToCSV(res.data.data.sessions);
            console.log(res.data.data.sessions);
            setDaylyData(res.data.data.sessions);
        });
    }, [userId]);

    useEffect(() => {
        setChartWidth(window.innerHeight / 55 + "rem");
    }, []);

    return (
        <div className="daylyChartZone" style={{ height: chartWidth }}>
            <h2 className="chartTitle daylyChartTitle">Activité quotidienne</h2>
            <RechartDaylyActivities daylyData={daylyData && daylyData}   screenWidth={screenWidth} />
        </div>
    );
};

export default GraphDaylyActivities;

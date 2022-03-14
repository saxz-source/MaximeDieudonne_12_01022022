import React, { useEffect, useState } from "react";
import { getDaylyActivities } from "../../../API/APICalls";
import RechartDaylyActivities from "./RechartDaylyActivities";
import "./graphDaylyActivities.css";
import { DaylyActivityData } from "../../../classes/DaylyActivityData";
import PropTypes from "prop-types";
import { DaylyActivityDatas } from "../../../classes/DaylyActivitiesDatas";

const GraphDaylyActivities = ({ userId, screenWidth }) => {
    // The data that will be displayed in the daylyActivities graph
    const [daylyData, setDaylyData] = useState([]);

    // Fetch the data for dayly activities corresponding to the user and type them
    useEffect(() => {
        getDaylyActivities(userId).then((res) => {
            const daylyDatas = new DaylyActivityDatas(res.data.data.sessions);

            console.log(daylyDatas)
            // const daylyDatas = res.data.data.sessions.map((s) => {
            //     return new DaylyActivityData(s);
            // });
            setDaylyData(daylyDatas.daylyActivityData);
        });
    }, [userId]);
    // const [chartWidth, setChartWidth] = useState("37.5rem");

    // useEffect(() => {
    //     setChartWidth(window.innerHeight / 55 + "rem");
    // }, []);

    return (
        <div className="daylyChartZone" style={{ height: "16rem" }}>
            <h2 className="chartTitle daylyChartTitle">Activité quotidienne</h2>
            <RechartDaylyActivities
                daylyData={daylyData && daylyData}
                screenWidth={screenWidth}
            />
        </div>
    );
};

GraphDaylyActivities.propTypes = {
    /** The user id @type {number} */
    userId: PropTypes.number.isRequired,
};

export default GraphDaylyActivities;

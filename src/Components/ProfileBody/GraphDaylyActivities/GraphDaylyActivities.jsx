import React, { useEffect, useState } from "react";
import { getDaylyActivities } from "../../../API/APICalls";
import RechartDaylyActivities from "./RechartDaylyActivities";
import "./graphDaylyActivities.css";
import PropTypes from "prop-types";
import { DaylyActivityDatas } from "../../../classes/DaylyActivitiesDatas";

const GraphDaylyActivities = ({ userId }) => {
    // The data that will be displayed in the daylyActivities graph
    const [daylyDatas, setDaylyDatas] = useState({});

    // Fetch the data for dayly activities corresponding to the user and type them
    useEffect(() => {
        getDaylyActivities(userId).then((res) => {
            const daylyDatas = new DaylyActivityDatas(res.data.data.sessions);
            console.log(daylyDatas);
            setDaylyDatas(daylyDatas);
        });
    }, [userId]);

    return (
        <div className="daylyChartZone" style={{ height: "16rem" }}>
            <h2 className="chartTitle daylyChartTitle">Activité quotidienne</h2>
            <RechartDaylyActivities daylyDatas={daylyDatas && daylyDatas} />
        </div>
    );
};

GraphDaylyActivities.propTypes = {
    /** The user id @type {number} */
    userId: PropTypes.number.isRequired,
};

export default GraphDaylyActivities;

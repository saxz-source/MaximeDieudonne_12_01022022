import React, { useEffect, useState } from "react";
import { getDaylyActivities } from "../../../API/APICalls";
import RechartDaylyActivities from "./RechartDaylyActivities";
import "./graphDaylyActivities.css";
import PropTypes from "prop-types";
import { DaylyActivityDatas } from "../../../classes/DaylyActivitiesDatas";
import ErrorMessage from "../../Errors/ErrorMessage";
import Loader from "../../Loader/Loader";

/** @returns Displays the chart with its title */
const GraphDaylyActivities = ({ userId }) => {
    // The data that will be displayed in the daylyActivities graph
    const [daylyDatas, setDaylyDatas] = useState({});
    /** The load status @type {{loading: boolean, hasError: boolean, success: boolean}} */
    const [loadStatus, setLoadStatus] = useState({
        loading: true,
        hasError: false,
        success: false,
    });

    // Fetch the data for dayly activities corresponding to the user and type them
    useEffect(() => {
        getDaylyActivities(userId)
            .then((res) => {
                setDaylyDatas(res);
                setLoadStatus({
                    hasError: false,
                    loading: false,
                    success: true,
                });
            })
            .catch((e) => {
                setLoadStatus({
                    hasError: true,
                    loading: false,
                    success: false,
                });
            });
    }, [userId]);

    return (
        <div className="daylyChartZone" style={{ height: "16rem" }}>
            <h2 className="chartTitle daylyChartTitle">Activité quotidienne</h2>
            {loadStatus.success && (
                <RechartDaylyActivities daylyDatas={daylyDatas} />
            )}
            {loadStatus.hasError && <ErrorMessage />}
            {loadStatus.loading && <Loader />}
        </div>
    );
};

GraphDaylyActivities.propTypes = {
    /** The user id @type {number} */
    userId: PropTypes.number.isRequired,
};

export default GraphDaylyActivities;

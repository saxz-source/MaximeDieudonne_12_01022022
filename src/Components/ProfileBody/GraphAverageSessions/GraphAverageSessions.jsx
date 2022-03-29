import React, { useEffect, useState } from "react";
import { getAverageSessions } from "../../../API/APICalls";
import LineChartAverageSessions from "./LineChartAverageSessions";
import "./graphAverageSessions.css";
import PropTypes from "prop-types";
import { SessionData } from "../../../classes/SessionData";
import ErrorMessage from "../../Errors/ErrorMessage";
import Loader from "../../Loader/Loader";

/** @returns the zone where is displayed the Average session graph */
const GraphAverageSessions = ({ userId }) => {
    /** The data for sessions @type {SessionData[]} */
    const [sessionDatas, setSessionDatas] = useState(null);
    /** The load status @type {{loading: boolean, hasError: boolean, success: boolean}} */
    const [loadStatus, setLoadStatus] = useState({
        loading: true,
        hasError: false,
        success: false,
    });

    useEffect(() => {
        getAverageSessions(userId)
            .then((res) => {
                setSessionDatas(res);
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
        <div className="averageSessionsZone">
            <h2 className="averageChartTitle">Duréee moyenne des sessions</h2>
            {loadStatus.success && (
                <LineChartAverageSessions sessionDatas={sessionDatas} />
            )}
            {loadStatus.hasError && <ErrorMessage />}
            {loadStatus.loading && <Loader />}
        </div>
    );
};

GraphAverageSessions.propTypes = {
    userId: PropTypes.number.isRequired,
};

export default GraphAverageSessions;

import React, { useEffect, useState } from "react";
import { getActivitiesType } from "../../../API/APICalls";
import RadarChartActivitiesType from "./RadarChartActivitiesType";
import "./graphActivitiesType.css";
import { ActivitiesTypeData } from "../../../classes/ActivitiesTypeData";
import PropTypes from "prop-types";
import Loader from "../../Loader/Loader";
import ErrorMessage from "../../Errors/ErrorMessage";

/**@returns The place where is diplayed the activities type graph */
const GraphActivitiesType = ({ userId }) => {
    /** The array of activities type @type {ActivitiesTypeData} */
    const [activitiesType, setActivitiesType] = useState([]);

    /** The load status @type {{loading: boolean, hasError: boolean, success: boolean}} */
    const [loadStatus, setLoadStatus] = useState({
        loading: true,
        hasError: false,
        success: false,
    });

    useEffect(() => {
        getActivitiesType(userId)
            .then((res) => {
                setActivitiesType(res);
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
        <div className="activitiesTypeZone">
            {loadStatus.success && (
                <RadarChartActivitiesType activitiesData={activitiesType} />
            )}
            {loadStatus.hasError && <ErrorMessage />}
            {loadStatus.loading && <Loader />}
        </div>
    );
};

GraphActivitiesType.propTypes = {
    /** The user id @type {number} */
    userId: PropTypes.number.isRequired,
};

export default GraphActivitiesType;

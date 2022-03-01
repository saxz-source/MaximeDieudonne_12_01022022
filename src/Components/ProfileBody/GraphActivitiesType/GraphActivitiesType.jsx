import React, { useEffect, useState } from "react";
import { getActivitiesType } from "../../../API/APICalls";
import RadarChartActivitiesType from "./RadarChartActivitiesType";
import "./graphActivitiesType.css";
import { ActivitiesTypeData } from "../../../classes/ActivitiesTypeData";
import PropTypes from "prop-types";

const GraphActivitiesType = ({ userId, screenWidth }) => {
    const [activitiesType, setActivitiesType] = useState([]);

    useEffect(() => {
        getActivitiesType(userId).then((res) => {
            const activitiesTypeData = new ActivitiesTypeData(res.data.data);
            const formatedActivitiesTypeData =
                activitiesTypeData.formatActivitiesData();
            setActivitiesType(formatedActivitiesTypeData);
        });
    }, [userId]);

    return (
        <div className="activitiesTypeZone">
            <RadarChartActivitiesType
                activitiesData={activitiesType}
                screenWidth={screenWidth}
            />
        </div>
    );
};

GraphActivitiesType.propTypes = {
    /** The user id @type {number} */
    userId: PropTypes.number.isRequired,
    /**
     * The innerWidth of the screen
     */
    screenWidth: PropTypes.number,
};

export default GraphActivitiesType;

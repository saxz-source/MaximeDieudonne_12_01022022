import React, { useEffect, useState } from "react";
import { getActivitiesType } from "../../../API/APICalls";
import RadarChartActivitiesType from "./RadarChartActivitiesType";
import "./graphActivitiesType.css";
import { ActivitiesTypeData } from "../../../classes/ActivitiesTypeData";
import PropTypes from "prop-types";

/**@returns The place where is diplayed the activities type graph */
const GraphActivitiesType = ({ userId }) => {
    /** The array of activities type @type {ActivitiesTypeData} */
    const [activitiesType, setActivitiesType] = useState([]);

    useEffect(() => {
        getActivitiesType(userId).then((res) => {
            const activitiesTypeData = new ActivitiesTypeData(res.data.data);
            const formatedActivitiesTypeData =
                activitiesTypeData.formatActivitiesData();
            console.log(formatedActivitiesTypeData);
            setActivitiesType(formatedActivitiesTypeData);
        });
    }, [userId]);

    return (
        <div className="activitiesTypeZone">
            <RadarChartActivitiesType activitiesData={activitiesType} />
        </div>
    );
};

GraphActivitiesType.propTypes = {
    /** The user id @type {number} */
    userId: PropTypes.number.isRequired,
};

export default GraphActivitiesType;

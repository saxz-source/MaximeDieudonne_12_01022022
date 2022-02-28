import React, { useEffect, useState } from "react";
import { getActivitiesType } from "../../../API/APICalls";
import RadarChartActivitiesType from "./RadarChartActivitiesType";
import "./graphActivitiesType.css";

const GraphActivitiesType = ({ userId, screenWidth }) => {
    const [activitiesType, setActivitiesType] = useState(null);

    useEffect(() => {
        getActivitiesType(userId).then((res) => {
            setActivitiesType(res.data.data);
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

export default GraphActivitiesType;

import React, { useEffect, useState } from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
} from "recharts";
import PropTypes from "prop-types";
import { ActivitiesTypeData } from "../../../classes/ActivitiesTypeData";

/**@returns The radar graph for activities type data  */
const RadarChartActivitiesType = ({ activitiesData }) => {
    /** @type {ActivitiesTypeData} */
    const [data, setData] = useState([]);
    /** The measure used for the chart @type {number} */
    const height = 188;

    // Update the data to display in the chart
    useEffect(() => {
        if (activitiesData) {
            setData(activitiesData);
        }
    }, [activitiesData]);

    return (
        <RadarChart
            outerRadius={height / 3.3}
            width={height}
            height={height}
            data={data}
        >
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" />
            <PolarRadiusAxis
                axisLine={false}
                tick={false}
                angle={30}
                domain={[0, 200]}
            />
            <Radar
                name="Mike"
                dataKey="value"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
            />
        </RadarChart>
    );
};

RadarChartActivitiesType.propTypes = {
    /** The data required for the Chart @type {ActivitiesTypeData[]} */
    activitiesData: PropTypes.array.isRequired,
};

export default RadarChartActivitiesType;

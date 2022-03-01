import React, { useEffect, useState } from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
} from "recharts";
import PropTypes from "prop-types";

const RadarChartActivitiesType = ({ activitiesData, screenWidth }) => {
    const [data, setData] = useState([]);

    // Update the data to display in the chart
    useEffect(() => {
        if (activitiesData) {
            setData(activitiesData);
        }
    }, [activitiesData]);

    const [heigth, setHeight] = useState(188);
    // // Update the height of the radarChart depending on the screen size prop
    // useEffect(() => {
    //     setHeight(screenWidth/ 5.44);
    // }, [screenWidth]);

    return (
        <RadarChart
            outerRadius={heigth / 3}
            width={heigth}
            height={heigth}
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
    /**
     * The data required for the Chart @type {ActivitiesTypeData[]}
     */
    activitiesData: PropTypes.array.isRequired,
    /**
     * The innerWidth of the screen
     */
    screenWidth: PropTypes.number,
};

export default RadarChartActivitiesType;

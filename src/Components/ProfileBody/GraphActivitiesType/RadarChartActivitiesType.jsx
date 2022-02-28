import React, { useEffect, useState } from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
} from "recharts";
import { getActivitiesTypeNames } from "../../../functions/getChartUnits";

const RadarChartActivitiesType = ({ activitiesData, screenWidth }) => {
    const [data, setData] = useState(null);
  

    // Update the data to display in the chart 
    useEffect(() => {
        if (activitiesData) {
            const newDataSet = formatActivitiesData(activitiesData);
            setData(newDataSet);
        }
    }, [activitiesData]);


    const [heigth, setHeight] = useState(188);
    // // Update the height of the radarChart depending on the screen size prop
    // useEffect(() => {
    //     setHeight(screenWidth/ 5.44);
    // }, [screenWidth]);

    /**
     *
     * @param {*} activitiesData
     * @returns
     */
    const formatActivitiesData = (activitiesData) => {
        const activitiesKinds = activitiesData.kind;
        const activitiesDatas = activitiesData.data;
        activitiesDatas.map((a) => {
            return (a.kind = getActivitiesTypeNames(activitiesKinds[a.kind]));
        });
        return activitiesDatas;
    };

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

export default RadarChartActivitiesType;

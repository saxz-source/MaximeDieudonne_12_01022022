import React, { useEffect, useState } from "react";
import {
    getDaylyActivitiesUnit,
    getDaylyActivitiesNames,
} from "../../../functions/getChartUnits";
import { getExtremeNumbersInArray } from "../../../functions/getExtremeNumbersInArray";
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const RechartDaylyActivities = ({ daylyData, screenWidth }) => {
    const [data, setData] = useState(null);

    const [extremeWeigths, setExtremeWeights] = useState([]);

    useEffect(() => {
        if (daylyData) {
            setData(daylyData);
            setExtremeWeights(
                getExtremeNumbersInArray(daylyData.map((d) => d.kilogram))
            );
        }
    }, [daylyData]);

    const renderLegend = (value, entry) => {
        return (
            <span className="legendStyle">
                {getDaylyActivitiesNames(value)} (
                {getDaylyActivitiesUnit(value)})
            </span>
        );
    };

    const renderToolTip = (value, name, props) => {
        return value + getDaylyActivitiesUnit(name);
    };

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                data={daylyData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                barSize={5}
                barCategoryGap={54}
                barGap={6}
            >
                <CartesianGrid strokeDasharray="4" vertical={false} />
                <XAxis dataKey="day" tickLine={false} tickMargin={30} />
                <YAxis
                    tickCount={3}
                    axisLine={false}
                    tickSize={0}
                    orientation="right"
                    tickMargin={32}
                />
                <Tooltip
                    itemStyle={{
                        background: "#E60000",
                        color: "white",
                        fontSize: "0.5rem",
                    }}
                    contentStyle={{ fontSize: "0", background: "#E60000" }}
                    formatter={renderToolTip}
                />
                <Legend
                    verticalAlign="top"
                    iconType="circle"
                    iconSize={6}
                    align="right"
                    formatter={renderLegend}
                />
                <Bar dataKey="kilogram" fill="#282D30" radius={[3, 3, 0, 0]} />
                <Bar dataKey="calories" fill="#E60000" radius={[3, 3, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default RechartDaylyActivities;

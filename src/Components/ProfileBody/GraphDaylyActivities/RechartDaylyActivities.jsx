import React, { useEffect, useState } from "react";
import {
    getDaylyActivitiesUnit,
    getDaylyActivitiesNames,
} from "../../../functions/getChartUnits";
import { getExtremeNumbersInArray } from "../../../functions/getExtremeNumbersInArray";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

const RechartDaylyActivities = ({ daylyData, screenWidth }) => {
    /** The chart data */
    const [data, setData] = useState([]);
    /** The extreme points for chart y axis */
    const [extremeWeigths, setExtremeWeights] = useState([]);

    /**
     * Update the data displayed in the chart if exists
     */
    useEffect(() => {
        if (daylyData) {
            console.log(daylyData)
            setData(daylyData);
        }
    }, [daylyData]);

    /**
     * For each type of variable used for chart, render a legend field
     * @param {string} value the name of the variable
     * @returns {}
     */
    const renderLegend = (value) => {
        return (
            <span className="legendStyle">
                {getDaylyActivitiesNames(value)} (
                {getDaylyActivitiesUnit(value)})
            </span>
        );
    };

    /**
     * Render a tooltip string line from variable name and value
     * @param {number} value the value of the variable
     * @param {string} name the variable name
     * @returns {string} a ormatted tooltip line
     */
    const renderToolTip = (value, name) => {
        return value + getDaylyActivitiesUnit(name);
    };

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 23,
                }}
                barSize={5}
                barCategoryGap={54}
                barGap={6}
            >
                <CartesianGrid strokeDasharray="4" vertical={false} />
                <XAxis dataKey="day" tickLine={false} tickMargin={16} />
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

RechartDaylyActivities.propTypes = {
    /**
     * The data required for the Chart @type {DaylyActivityData[]}
     */
    daylyData: PropTypes.array,
    /**
     * The innerWidth of the screen
     */
    screenWidth: PropTypes.number,
};

export default RechartDaylyActivities;

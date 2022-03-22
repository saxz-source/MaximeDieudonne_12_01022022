import React, { useEffect, useState } from "react";
import {
    getDaylyActivitiesUnit,
    getDaylyActivitiesNames,
} from "../../../functions/getChartUnits";
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

const RechartDaylyActivities = ({ daylyDatas }) => {
    /** The chart data */
    const [data, setData] = useState([]);

    /**
     * Update the data displayed in the chart if exists
     */
    useEffect(() => {
        if (daylyDatas) {
            setData(daylyDatas.daylyActivityData);
        }
    }, [daylyDatas]);

    /**
     * For each type of variable used for chart, render a legend field
     * @param {string} value the name of the variable
     * @returns {}
     */
    const renderLegend = (value) => {
        let nameValue = "";
        let unit = "";
        switch (value) {
            case "kilogram":
                nameValue = "kilogram";
                unit = "kg";
                break;
            case "caloriesOnGraph":
                nameValue = "Calories brûlées";
                unit = "kCal";
                break;
            default:
                nameValue = value;
                unit = value;
                break;
        }
        return (
            <span className="legendStyle">
                {getDaylyActivitiesNames(nameValue)} (
                {getDaylyActivitiesUnit(unit)})
            </span>
        );
    };

    /**
     * Render a tooltip string line from variable name and value
     * @param {number} value the value of the variable
     * @param {string} name the variable name
     * @returns {string} a formatted tooltip line
     */
    const renderToolTip = (value, name, props) => {
        if (name === "caloriesOnGraph") {
            return parseInt(props.payload.calories.toFixed(0)) + "Kcal";
        }
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
                    tickCount={4}
                    axisLine={false}
                    tickSize={0}
                    orientation="right"
                    tickMargin={32}
                    dataKey="kilogram"
                    domain={["dataMin-1", "dataMax+1"]}
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
                <Bar
                    dataKey="caloriesOnGraph"
                    fill="#E60000"
                    radius={[3, 3, 0, 0]}
                />
            </BarChart>
        </ResponsiveContainer>
    );
};

RechartDaylyActivities.propTypes = {
    daylyDatas: PropTypes.object,
};

export default RechartDaylyActivities;

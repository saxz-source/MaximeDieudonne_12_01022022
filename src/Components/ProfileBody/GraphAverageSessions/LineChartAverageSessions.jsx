import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { getAverageSessionsNames } from "../../../functions/getChartUnits";
import ToolTipAverageSessions from "./ToolTipAverageSessions";
import PropTypes from "prop-types";
import { SessionData } from "../../../classes/SessionData";
import CustomToolTipCursorAS from "./CustomToolTipCusorAS";

/** @returns the graph for the average sessions line graph */
const LineChartAverageSessions = ({ sessionDatas }) => {
    /** The session datas that feeds the line graph @type {SessionData[]} */
    const [sessionsDatas, setSessionDatas] = useState(null);

    useEffect(() => {
        if (sessionDatas) {
            console.log(sessionDatas);
            const formatedSessionDatas = formatSessionDatas(sessionDatas);
            console.log(formatedSessionDatas);
            setSessionDatas(formatedSessionDatas);
        }
    }, [sessionDatas]);

    /**
     * Format the datas by changing the data "name"
     * @param {*} sessionDatas
     * @returns
     */
    const formatSessionDatas = (sessionDatas) => {
        return sessionDatas.map((s) => {
            return {
                ...s,
                day: getAverageSessionsNames(s.day),
            };
        });
    };

    return (
        <ResponsiveContainer width="100%" height="75%">
            <LineChart data={sessionsDatas} className="averageLineChart">
                <XAxis dataKey="day" axisLine={false} tickLine={false} />
                <Tooltip
                    content={<ToolTipAverageSessions />}
                    cursor={<CustomToolTipCursorAS />}
                />
                <Line
                    type="monotone"
                    dataKey="sessionLength"
                    stroke="rgba(255,255,255,0.75)"
                    activeDot={{ r: 3, className: "dotLineShadow" }}
                    dot={{ r: 0 }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

LineChartAverageSessions.propTypes = {
    /** @type {SessionData[]} */
    sessionDatas: PropTypes.array,
};

export default LineChartAverageSessions;

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
            setSessionDatas(formatSessionDatas(sessionDatas));
        }
    }, [sessionDatas]);

    /**
     * Format the datas by changing the data "name"
     * @param {sessionDatas[]} sessionDatas
     * @returns
     */
    const formatSessionDatas = (sessionDatas) => {
        addExtraPerformances(sessionDatas);
        return sessionDatas.map((s) => {
            return {
                ...s,
                day: getAverageSessionsNames(s.day),
            };
        });
    };

    /**
     * Add extra fake performance to continue the graph line outside the graph
     * @param {SessionData[]} sessionDatas
     * @returns {SessionData[]}
     */
    const addExtraPerformances = (sessionDatas) => {
        sessionDatas.unshift({
            day: 0,
            sessionLength: sessionDatas.filter((s) => s.day === 1)[0]
                .sessionLength,
        });
        sessionDatas.push({
            day: 8,
            sessionLength: sessionDatas.filter((s) => s.day === 7)[0]
                .sessionLength,
        });
        return sessionDatas;
    };

    return (
        <ResponsiveContainer width={220} height="100%">
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

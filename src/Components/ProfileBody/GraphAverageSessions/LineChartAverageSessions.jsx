import React, { useEffect, useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { getAverageSessionsNames } from "../../../functions/getChartUnits";
import ToolTipAverageSessions from "./ToolTipAverageSessions";
import PropTypes from "prop-types";


const LineChartAverageSessions = ({ sessionData }) => {
    const [sessionsData, setSessionData] = useState(null);

    useEffect(() => {
        if (sessionData) {
            console.log(sessionData)
            const formatedSessionDatas = formatSessionDatas(sessionData);
            console.log(formatedSessionDatas);
            setSessionData(formatedSessionDatas);
        }
    }, [sessionData]);

    /**
     * Format the datas by changing the data "name"
     * @param {*} sessionData
     * @returns
     */
    const formatSessionDatas = (sessionData) => {
        return sessionData.map((s) => {
            return {
                ...s,
                day: getAverageSessionsNames(s.day),
            };
        });
    };

    return (
        <ResponsiveContainer width="100%" height="75%">
            <LineChart data={sessionsData} className="averageLineChart">
                <XAxis dataKey="day" axisLine={false} tickLine={false} />
                <Tooltip content={<ToolTipAverageSessions />} />
                <Line
                    type="monotone"
                    dataKey="sessionLength"
                    stroke="#FFFFFF"
                    activeDot={{ r: 2, className: "dotLineShadow" }}
                    dot={{ r: 0 }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default LineChartAverageSessions;

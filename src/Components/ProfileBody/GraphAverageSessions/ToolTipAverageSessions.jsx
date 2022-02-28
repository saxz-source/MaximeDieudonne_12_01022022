import React from "react";
import { getAverageSessionsUnits } from "../../../functions/getChartUnits";

const ToolTipAverageSessions = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
                <p className="averageToolTip">
                    {payload[0].value + getAverageSessionsUnits()}
                </p>
        );
    }

    return null;
};

export default ToolTipAverageSessions;

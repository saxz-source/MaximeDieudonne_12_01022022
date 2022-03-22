import React from "react";
import { getAverageSessionsUnits } from "../../../functions/getChartUnits";
import PropTypes from "prop-types";

/** @returns the tooltip for the average session graph */
const ToolTipAverageSessions = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <p className="averageToolTip">
                {payload[0].value + getAverageSessionsUnits()}
            </p>
        );
    }
    return null;
};

ToolTipAverageSessions.propTypes = {
    //  active: PropTypes.boolean.isRequired,
    payload: PropTypes.array,
};

export default ToolTipAverageSessions;

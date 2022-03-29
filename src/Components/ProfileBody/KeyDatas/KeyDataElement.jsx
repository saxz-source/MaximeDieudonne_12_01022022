import React from "react";
import PropTypes from "prop-types";

/**@returns A key data element */
const KeyDataElement = ({ text, value, icon, color }) => {
    return (
        <div className="keyDataElement">
            <div className="keyData_divIcon" style={{ background: color }}>
                <img src={icon} className="keyData_icon" alt="" />
            </div>
            <div className="keyData_infos">
                <span className="keyData_value"> {value} </span>
                <span className="keyData_text"> {text} </span>
            </div>
        </div>
    );
};

KeyDataElement.proptype = {
    /**
     * The type of nutrient @type {string}
     */
    text: PropTypes.string.isRequired,
    /**
     * The value with its unit @type {string}
     */
    value: PropTypes.string.isRequired,
    /**
     * The icon URL @type {string}
     */
    icon: PropTypes.string.isRequired,
    /**
     * The rgba color code @type {string}
     */
    color: PropTypes.string.isRequired,
};

export default KeyDataElement;

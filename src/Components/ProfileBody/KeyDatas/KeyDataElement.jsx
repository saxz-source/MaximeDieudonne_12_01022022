import React from "react";

const KeyDataElement = ({ text, value, icon, color }) => {
    return (
        <div className="keyDataElement">
            <div className="keyData_divIcon" style={{background : color}} >
                <img src={icon} className="keyData_icon" alt="" />
            </div>
            <div className="keyData_infos">
                <span className="keyData_value"> {value} </span>
                <span className="keyData_text"> {text} </span>
            </div>
        </div>
    );
};

export default KeyDataElement;

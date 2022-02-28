import React from "react";
import sitDownIcon from "../../Assets/sitdown.svg";
import swimIcon from "../../Assets/swim.svg";
import altereIcon from "../../Assets/altere.svg";
import veloIcon from "../../Assets/velo.svg";

const LeftNav = () => {
    return (
        <nav className="leftNav">
            <ul>
                <li className="leftNav_item">
                    <img src={sitDownIcon} className="leftNavIcon" alt="" />
                </li>
                <li className="leftNav_item">
                    <img src={swimIcon} className="leftNavIcon" alt="" />
                </li>
                <li className="leftNav_item">
                    <img src={veloIcon} className="leftNavIcon" alt="" />
                </li>
                <li className="leftNav_item">
                    <img src={altereIcon} className="leftNavIcon" alt="" />
                </li>
            </ul>
        </nav>
    );
};

export default LeftNav;

import React from "react";
import Copyrigth from "./Copyrigth";
import LeftNav from "./LeftNav";
import "./leftNavBar.css";

const LeftNavBar = () => {
    return (
        <div className="leftNavBar">
            <LeftNav />
            <Copyrigth/>
        </div>
    );
};

export default LeftNavBar;

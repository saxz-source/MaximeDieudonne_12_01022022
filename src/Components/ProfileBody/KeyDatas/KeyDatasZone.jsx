import React from "react";
import KeyDataElement from "./KeyDataElement";
import "./keyDataZone.css";
import caloriesIcon from "../../../Assets/calories.svg";
import proteineIcon from "../../../Assets/proteine.svg";
import glucidsIcon from "../../../Assets/appleglucids.svg";
import lipidsIcon from "../../../Assets/cheeseburgerlipids.svg";
import { KeyData } from "../../../classes/KeyData";
import PropTypes from "prop-types";

/**@returns The section where are displayed the key data cards */
const KeyDatasZone = ({ keyData }) => {
    return (
        <section className="keyDatas">
            <KeyDataElement
                text={"Calories"}
                value={keyData.calorieCountWithUnits}
                color={"rgba(255, 0, 0, 0.1)"}
                icon={caloriesIcon}
            />
            <KeyDataElement
                text={"Proteines"}
                value={keyData.proteinCountWithUnits}
                color={"rgba(74, 184, 255, 0.1)"}
                icon={proteineIcon}
            />
            <KeyDataElement
                text={"Glucides"}
                value={keyData.carbohydrateCountWithUnits}
                color={"rgba(249, 206, 35,0.1)"}
                icon={glucidsIcon}
            />
            <KeyDataElement
                text={"Lipides"}
                value={keyData.lipidCountWithUnits}
                color={"rgba(253, 81, 129,0.1)"}
                icon={lipidsIcon}
            />
        </section>
    );
};

KeyDatasZone.propTypes = {
    /**
     * The key datas of the user @type {keyData}
     */
    keyData: PropTypes.instanceOf(KeyData).isRequired,
};

export default KeyDatasZone;

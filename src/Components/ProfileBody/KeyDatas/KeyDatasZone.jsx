import React from "react";
import KeyDataElement from "./KeyDataElement";
import "./keyDataZone.css";
import caloriesIcon from "../../../Assets/calories.svg";
import proteineIcon from "../../../Assets/proteine.svg";
import glucidsIcon from "../../../Assets/appleglucids.svg";
import lipidsIcon from "../../../Assets/cheeseburgerlipids.svg";

const KeyDatasZone = ({ keyData }) => {
    return (
        <section className="keyDatas">
            <KeyDataElement
                text={"Calories"}
                value={keyData["calorieCount"]}
                color={"rgba(255, 0, 0, 0.1)"}
                icon={caloriesIcon}
            />
            <KeyDataElement
                text={"Proteines"}
                value={keyData["proteinCount"]}
                color={"rgba(74, 184, 255, 0.1)"}
                icon={proteineIcon}
            />
            <KeyDataElement
                text={"Glucides"}
                value={keyData["carbohydrateCount"]}
                color={"rgba(249, 206, 35,0.1)"}
                icon={glucidsIcon}
            />
            <KeyDataElement
                text={"Lipides"}
                value={keyData["lipidCount"]}
                color={"rgba(253, 81, 129,0.1)"}
                icon={lipidsIcon}
            />
        </section>
    );
};

export default KeyDatasZone;

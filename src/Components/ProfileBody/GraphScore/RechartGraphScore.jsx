import { useEffect, useState } from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

/**@returns the score graph using recharts lib */
const RechartGraphScore = ({ todayScore }) => {
    /**  The score of the user @type {number} */
    const [scoreData, setScoreData] = useState(null);

    useEffect(() => {
        if (todayScore) {
            setScoreData(formatScoreData(todayScore));
        }
    }, [todayScore]);

    /**
     * Build the the object we need to shape the graph
     * @param {number} todayScore the score of the day coming from datas
     * @returns {{name : string, score : number}[]} an array of objects we use to shape the graph
     */
    const formatScoreData = (todayScore) => {
        return [
            { name: "todayScore", score: todayScore },
            { name: "compare", score: 1 - todayScore },
        ];
    };

    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie
                    data={scoreData}
                    innerRadius={60}
                    outerRadius={70}
                    paddingAngle={0}
                    dataKey="score"
                    cornerRadius={6}
                />
            </PieChart>
        </ResponsiveContainer>
    );
};

RechartGraphScore.propTypes = {
    todayScore: PropTypes.number,
};

export default RechartGraphScore;

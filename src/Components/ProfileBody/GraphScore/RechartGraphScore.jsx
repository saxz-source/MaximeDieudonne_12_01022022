import { useEffect, useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const RechartGraphScore = ({ todayScore, screenWidth }) => {
    const [scoreData, setScoreData] = useState(null);
    const ya = ["red", "transparent"];
    useEffect(() => {
        if (todayScore) {
            console.log(todayScore);
            setScoreData(formatScoreData(todayScore));
            console.log(formatScoreData(todayScore));
        }
    }, [todayScore]);

    const formatScoreData = (todayScore) => {
        return [
            { name: "todayScore", score: todayScore },
            { name: "compare", score: 1 - todayScore },
        ];
    };

    //    const [heigth, setHeight] = useState(undefined);
    // // Update the height of the radarChart depending on the screen size prop
    // useEffect(() => {
    //     setHeight(screenWidth/ 5.44);
    // }, [screenWidth]);

    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
                <Pie
                    data={scoreData}
                    cx={120}
                    cy={200}
                    startAngle={180}
                    endAngle={0}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="score"
                    
                />
       
            </PieChart>
        </ResponsiveContainer>
    );
};

export default RechartGraphScore;



// {ya.map((entry, index) => {
//   console.log(index);

//   return (
//       <Cell
//           key={`cell-${index}`}
//           fill={index === 0 ? "#fff" : "transparent"}
//       />
//   );
// })}
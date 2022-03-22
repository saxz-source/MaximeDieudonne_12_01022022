import { useEffect } from "react";
import { Rectangle } from "recharts";
import { useState } from "react";

const CustomToolTipCursorAS = (props) => {
    const [cursorHeight, setCursorHeight] = useState(0);
    const [cursorX, setCursorX] = useState(0);

    //  const { x, y, width, height, stroke } = props;
    useEffect(() => {
        setCursorHeight(props.height + 50);
        setCursorX(props.points[0].x);
    }, [props]);

    return (
        <Rectangle
            fill="rgba(0, 0, 0,0.15)"
            x={cursorX}
            y={-10}
            width={props.width + 20}
            height={cursorHeight}
        />
    );
};

export default CustomToolTipCursorAS;

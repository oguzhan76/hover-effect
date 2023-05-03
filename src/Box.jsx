import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';

const Box = ({mousePos}) => {
    const [rect, setRect] = useState({left: 0, top: 0});
    const boxref = useRef();
    const vars = useRef({
        "--mouse-x": `5000px`,
        "--mouse-y": `5000px`
    });

    useEffect(() => {
        setRect(boxref.current.getBoundingClientRect());
    }, [])

    useEffect(() => {
        const x = mousePos.x - rect.left;
        const y = mousePos.y - rect.top;
        vars.current = {
            "--mouse-x": `${x}px`,
            "--mouse-y": `${y}px`
        }
    })

    return (
        <div ref={boxref} className="box" style={vars.current} >
            <div className="box-content" >Lorem Ipsum</div>
        </div>
    )
}

Box.propTypes = {
    mousePos: PropTypes.object
}

export default Box;
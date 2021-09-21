import './App.css';
import {useState} from "react";

export const App = () => {

    const [start, setStart] = useState([0, 0])
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [square_arr, setSquareArr] = useState([])
    const [counter, setCounter] = useState(0)

    const mouseMoveHandler = (e) => {
        setX(e.clientX)
        setY(e.clientY)
        let new_width = x - start[0]
        let new_height = y - start[1]
        if (e.movementX && Math.abs(width) < Math.abs(new_width)) {
            setWidth(new_width)
        }
        if (e.movementY && Math.abs(height) < Math.abs(new_height)) {
            setHeight(new_height)
        }
    }

    const mouseDownHandler = (e) => {
        setWidth(0)
        setHeight(0)
        setStart([e.clientX, e.clientY])
    }

    const mouseUpHandler = () => {
        setCounter(counter + 1)
        let square = (
            <div style={{
                backgroundColor: "black",
                position: "absolute",
                width: Math.abs(width),
                height: Math.abs(height),
                top: height < 0 ? start[1] + height : start[1],
                left: width < 0 ? start[0] + width : start[0],
                zIndex: -1
            }} key={counter}>
            </div>)
        setSquareArr([...square_arr, square])
    }

    return (<div>
            <div className="pad" onMouseMove={mouseMoveHandler} onMouseDown={mouseDownHandler}
                 onMouseUp={mouseUpHandler}/>
            {square_arr}
        </div>
    );
}


import './App.css';
import {useState} from "react";

export const App = () => {

    const [start, startHandler] = useState([0, 0])
    const [width, widthHandler] = useState(0)
    const [height, heightHandler] = useState(0)
    const [x, xHandler] = useState(0)
    const [y, yHandler] = useState(0)
    const [square_arr, squareArrHandler] = useState([])
    const [counter, counterHandler] = useState(0)

    const mouseMoveHandler = (e) => {
        xHandler(e.clientX)
        yHandler(e.clientY)
        let new_width = x - start[0]
        let new_height = y - start[1]
        if (e.movementX && Math.abs(width) < Math.abs(new_width)) {
            widthHandler(new_width)
        }
        if (e.movementY && Math.abs(height) < Math.abs(new_height)) {
            heightHandler(new_height)
        }
    }

    const mouseDownHandler = (e) => {
        widthHandler(0)
        heightHandler(0)
        startHandler([e.clientX, e.clientY])
    }

    const mouseUpHandler = () => {
        counterHandler(counter + 1)
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
        squareArrHandler([...square_arr, square])
    }

    return (<div>
            <div className="pad" onMouseMove={mouseMoveHandler} onMouseDown={mouseDownHandler}
                 onMouseUp={mouseUpHandler}/>
            {square_arr}
        </div>
    );
}



import React, {useState, useRef} from "react";

export const StopWatch = () => {

    const [timePassed, setTimePassed] = useState(0);

    const timer = useRef(null);

    const start = () => {
        if(!timer.current) {
            let startTime = new Date();

            timer.current = setInterval(() => {
                const stopTime = new Date();

                setTimePassed(timePassed => stopTime - startTime + timePassed);

                startTime = stopTime;
            }, 1000)
        }
    }

    const stop = () => {
        window.clearInterval(timer.current);
        timer.current = null;
    }

    const reset = () => {
        stop();
        setTimePassed(0);
    }

    return(
        <div>
            <h2 className="border px-3 py-4 rounded my-3 mx-auto text-center" style={{maxWidth: "300px"}}>

                {Math.floor(timePassed / 1000)}s

            </h2>

            <div className="d-flex justify-content-center">

                <button className="btn btn-outline-primary mr-2" onClick={start}>

                    start

                </button>

                <button className="btn btn-outline-danger mr-2" onClick={stop}>

                    stop

                </button>

                <button className="btn btn-outline-warning" onClick={reset}>

                    reset

                </button>

            </div>
        </div>
    )
}
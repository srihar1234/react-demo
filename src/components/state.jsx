/* eslint-disable no-empty */
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";


const State = () => {

    const navigate = useNavigate();

    const [change, setChange] = useState(0);
    const [show, setShow] = useState(true);
    const multipleTwo = useMemo(() => {
        for (let i = 0; i < 1000000000; i++) { }
        return change * 2;
    }, [change])

    const handleAdd = () => {
        setChange((prev) => prev + 1);

    }
    const handleSub = () => {
        setChange((prev) => prev - 1);
    }

    return (
        <div className="state grid justify-center">

            <div className="flex gap-6 mt-20">
                <button className="btn btn-primary"
                    onClick={handleAdd}>INCREASE</button>

                {
                    show == true
                        ?
                        change
                        :
                        "no value"
                }

                <button className="btn btn-primary"
                    onClick={handleSub}>DECREASE</button>

                *2=
                <button className="btn btn-primary">{multipleTwo}</button>
            
            </div>


            <button className="btn btn-primary"
                onClick={() => setShow((prev) => !prev)}>CHANGE</button>
            <div>
                <button className="btn btn-warning" onClick={() => navigate("/")}>Back to home</button>
            </div>
        </div>
    )

}


export default State;
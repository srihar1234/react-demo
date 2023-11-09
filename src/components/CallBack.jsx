/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";


const CallBack = ()=>{

    const navigate = useNavigate();

    const [change,setChange] = useState(0);
    const [show,setShow] = useState(true);

  

    const handleAdd=() => {
         setChange((prev)=>prev+1);
         
    }
    const handleSub=() => {
        setChange((prev)=>prev-1);
   }
   const handleDisplay=useCallback(() => {
    setShow((prev)=>!prev);
   },[show]);
 
    return(
        <div className="state grid justify-center">
            
            <div className="flex justify-center  gap-5 mt-40">
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
            </div>

                <Display
                // show = {show}          [for not using display function]
                // setShow = {setShow}
                handleDisplay = {handleDisplay}
                />
                <button className="btn btn-warning" onClick={()=>navigate("/")}>Back to home</button>
            </div>
        
    )

}


export default CallBack;

// const Display = React.memo(({show,setShow}) => {    [if we set show function here itself,no need useCallBack()]
   const Display = React.memo (({handleDisplay})=>{
    console.log("child component renders")
    return(
        <div>
            <button 
            className="btn btn-accent" 
            // onClick={()=>setShow(!show)}>            [for setshow without handle display function]
            onClick={handleDisplay}>
            SHOW/HIDE</button>
        </div>
    )
});
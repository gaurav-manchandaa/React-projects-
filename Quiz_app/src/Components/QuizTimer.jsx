import { useEffect } from "react";
import { useState } from "react";
export default function QuizTimer ({timeout , timesup}){
    const [ReamainingTime , setRemainingTime] = useState(timeout);
    useEffect(()=>{
        console.log("this si timeout ")
       const id =  setTimeout(timesup, timeout);
        return ()=> clearTimeout(id);
    },[timeout,timesup]);
    useEffect(()=>{
        console.log("this is setinterval")
       const id =  setInterval(() => {
            setRemainingTime(prev=>{
                if (prev<0) return 0;
                return prev-100;
            })
        }, 100);
        return ()=> clearInterval(id);
    },[timesup]);
    
   
    return (<progress max={timeout} value={ReamainingTime}/>)
}

import { useRef } from "react";
export default function Answers ({answers , Answerstate , onselect ,slectedAnswers }){
    let suffledAnswers = useRef();
    if (!suffledAnswers.current) {
        suffledAnswers.current = [...answers].sort(() => Math.random() - 0.5);
    }
    return (
        <ul id="answers">
        {suffledAnswers.current.map((ans) => {
          const isselected = slectedAnswers==ans;
          let cssdesign = '';
          if (Answerstate==='answered' && isselected) cssdesign = 'selected';
          if ((Answerstate === "wrong"  || Answerstate=== "correct") && isselected) cssdesign = Answerstate;
          return <li key={ans} className="answer">
          <button onClick ={()=>onselect(ans)} className={cssdesign}>{ans}</button>
        </li>
        })}
      </ul>
    )
}
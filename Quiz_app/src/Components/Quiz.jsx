import { useState , useCallback, useEffect } from "react";

import QuizCompleted from "./QuizCompleted";
import Questions from "../Questions.js";
import QuizTimer from "./QuizTimer";
import Answers from "./Answers";
export default function Quiz() {
  const [slectedAnswers, setAnswers] = useState([]);
  const [Answerstate  , setAnswerstate  ] = useState('');
  const ActiceIndex = Answerstate === '' ? slectedAnswers.length : slectedAnswers.length-1;
  const isquizcompleted = slectedAnswers.length === Questions.length;


  const HandelClick = useCallback(function Handelclick(answer){
    
    
    setAnswers(prev=>{
      setAnswerstate('answered');
        const updatedanswer = [answer ,...prev]
        console.log(updatedanswer);
        return updatedanswer;
    })

    setTimeout(() => {
      if (answer === Questions[ActiceIndex].answers[0]){
        setAnswerstate('correct');
      }
      else setAnswerstate('wrong');

      setTimeout(() => {
        setAnswerstate('');
      }, 2000);``
    }, 1000);
  },[ActiceIndex]);



  const HandelSkip = useCallback(()=>{HandelClick(null)},[HandelClick])


  if (isquizcompleted){
    return (
        <QuizCompleted
        selectedAnswers={slectedAnswers}
        />
    )
  }
  return (
    <div id="quiz">
        <QuizTimer
        timeout={10000}
        timesup={HandelSkip}
        key={ActiceIndex}
        />
    <div id="questions">
      <h2>{Questions[ActiceIndex].text}</h2>
      <Answers
      key={ActiceIndex}
      answers = {Questions[ActiceIndex].answers}
      Answerstate={Answerstate}
      onselect={HandelClick}
      slectedAnswers = {slectedAnswers[0]}
      />
    </div>
    </div>
  );
}

// whenever you make an usestate think can this state can be handle
// by another state values
// if yes then leave that state in it
// and use that state

// sappose in this we are storing array of answer which is selected by
// the user to display the content in the question
// we can use its length of the answers in it



// after suffling all the quiz what he does is that we adds if check
// if the queizes are completed or not 
// if it is completed then we have to return other jsx code 
// if it is not completed we have to display other jsx code 


// now in this we want that when user clicks into the answer then that 
// answer would highlight and next question would be display in 2 secounds
// if the answer is correct then it would highlight with green 
// if the answer is wroung then it would highlight with red color 


// for doing this what we are doing we are changing handleclick function 
// in it 
// now this handle click funciton would handle the cases 
// what we are doing is changing ui so we need an usestate 



//now in this we have to apply logic fro suffling our data
 
import quixcomp from '../assets/quiz-complete.png'
import Questions from '../Questions'
export default function QuizCompleted({selectedAnswers}){
    let count =0;
    for (let i =0; i<selectedAnswers.length ; i++){
        if (selectedAnswers[i]=== Questions[Questions.length-(i+1)].answers[0]) count ++;
    }
    let calcualatescore = (count/selectedAnswers.length ) * 100;
    return (
        <div id="summary">
            <img src={quixcomp} alt='quiz completed image ' />
            <h2>Quiz completed </h2>
            <h1> number of answers that are correct are {count}</h1>
        </div>
    )
}
// now in quize complete we have to show how much correct answer it have shown 
// in selectedAnswer [0] would contain the last answer 
// user have been clicked 
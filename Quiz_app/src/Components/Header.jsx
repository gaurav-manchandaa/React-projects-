import quizlogo from '../assets/quiz-logo.png';
export default function Header (){
    return(
        <header>
            <img src={quizlogo} alt="" />
            <h1> REACT QUIZ</h1>
        </header>
    )
}
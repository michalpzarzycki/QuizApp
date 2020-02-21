import React, { useState } from 'react';
import Question from './components/Question'
import './App.css';
import Answer from './components/Answer';

const QUIZ = [{
  question:"Inside which HTML element do we put the JavaScript?",
  answers: [
    {answer:"<script>", correct:true},
    {answer:"<1>", correct:false},
    {answer:"<js>", correct:false},
    {answer:"<source>", correct:false}
  ]
},
{
  question:"EBEBEB?",
  answers: [
    {answer:"<script>", correct:true},
    {answer:"<link>", correct:false},
    {answer:"<js>", correct:false},
    {answer:"<source>", correct:false}
  ]
},
{
  question:"asddjkas?",
  answers: [
    {answer:"<script>", correct:true},
    {answer:"<3>", correct:false},
    {answer:"<js>", correct:false},
    {answer:"<source>", correct:false}
  ]
},
{
  question:"DKjdl;AKD?",
  answers: [
    {answer:"<script>", correct:true},
    {answer:"<link>", correct:false},
    {answer:"<4s>", correct:false},
    {answer:"<source>", correct:false}
  ]
}
] 


function App() {
const [quizQuestion, setQuizQuestion] = useState(QUIZ[0]);
const [questionNumber, setQuestionNumber] = useState(1)
const [points, setPoints] = useState(0)
const [sum, setSum] = useState(0)
function resetAnswer() {
  document.querySelector('#answer1').style.backgroundColor="aqua"
  document.querySelector('#answer2').style.backgroundColor="aqua"
  document.querySelector('#answer3').style.backgroundColor="aqua"
  document.querySelector('#answer4').style.backgroundColor="aqua"
}

function ifPoint(event) {

  if(questionNumber>=QUIZ.length+1) {
    return 0;
  } else {
    document.getElementById(event.currentTarget.getAttribute('id')).style.backgroundColor="green"
    let elem = event.currentTarget.getAttribute("id")
    let idAns = elem.substr(elem.length-1)
    if(QUIZ[questionNumber-1].answers[idAns-1].correct) {
      setPoints(1)
    } else {
      setPoints(0)
    }
  }
}
function handleClick(event) {
  resetAnswer();
  ifPoint(event)
}

function handleSubmit(e) {
  resetAnswer();

setSum(prev => prev+points)
if(QUIZ.length > questionNumber) {
  setQuestionNumber(previousValue => previousValue+1)
  setQuizQuestion(QUIZ[questionNumber])
}  

if((QUIZ.length) == questionNumber){
  document.querySelector("#button").innerText = "ZAKOŃCZ"
  document.querySelector(".popup").style.display="block"
  document.querySelector(".result").innerText = `RESULT: ${sum}/${QUIZ.length}`
}


}

  return (
    <div className="mainDiv">
     <div className="quizDiv">
       <div className="popup">
         <div className="result"></div>
       </div>
       <div className="question">
       <Question question={quizQuestion.question}/>
       </div>
      
       <div className="answers">
         {quizQuestion.answers.map((answer, index)=>{
           return <Answer key={index} answer={answer} handleClick={handleClick} index={index}/>
         })}
       </div>
     </div>
     <button onClick={handleSubmit} id="button">NEXT</button>
    </div>
  );
}

export default App;

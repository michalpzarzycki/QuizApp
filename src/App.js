import React, { useState } from 'react';
import Question from './components/Question'
import './App.css';
import Answer from './components/Answer';

const QUIZ = [{
  question:"Inside which HTML element do we put the JavaScript?",
  answers: [
    {answer:"<script>", correct:true},
    {answer:"<link>", correct:false},
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
    {answer:"<link>", correct:false},
    {answer:"<js>", correct:false},
    {answer:"<source>", correct:false}
  ]
},
{
  question:"DKjdl;AKD?",
  answers: [
    {answer:"<script>", correct:true},
    {answer:"<link>", correct:false},
    {answer:"<js>", correct:false},
    {answer:"<source>", correct:false}
  ]
}
] 


function App() {
const [quizQuestion, setQuizQuestion] = useState(QUIZ[0]);
const [questionNumber, setQuestionNumber] = useState(1)
function resetAnswer() {
  document.querySelector('#answer1').style.backgroundColor="aqua"
  document.querySelector('#answer2').style.backgroundColor="aqua"
  document.querySelector('#answer3').style.backgroundColor="aqua"
  document.querySelector('#answer4').style.backgroundColor="aqua"
}
function handleClick(event) {
  resetAnswer();

document.getElementById(event.currentTarget.getAttribute('id')).style.backgroundColor="green"

}

function handleSubmit(e) {
console.log()
if(QUIZ.length > questionNumber) {
  setQuestionNumber(previousValue => previousValue+1)
  setQuizQuestion(QUIZ[questionNumber])
}  

if((QUIZ.length-1) == questionNumber){
  document.querySelector("#button").innerText = "ZAKOŃCZ"
}


}

  return (
    <div className="mainDiv">
     <div className="quizDiv">
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

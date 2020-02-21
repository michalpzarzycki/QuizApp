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

let FIRST_QUESTION = QUIZ[0]
let arrIndex=0;
function App() {
const [quizQuestion, setQuizQuestion] = useState(QUIZ[0]);
const [questionNumber, setQuestionNumber] = useState(0)
function handleClick(event) {
  
  let name = event.currentTarget.name
  console.log("CLICK", name)
}

function handleSubmit(e) {
  
if(QUIZ.length> questionNumber) {
  setQuestionNumber(previousValue => previousValue+1)
  setQuizQuestion(QUIZ[questionNumber])

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
     <button onClick={handleSubmit}>NEXT</button>
    </div>
  );
}

export default App;

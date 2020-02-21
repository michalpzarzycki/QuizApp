import React from 'react';
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
}
] 

let FIRST_QUESTION = QUIZ[0]

function App() {
  return (
    <div className="mainDiv">
     <div className="quizDiv">
       <div className="question">
       <Question question={FIRST_QUESTION.question}/>
       </div>
      
       <div className="answers">
         {FIRST_QUESTION.answers.map((answer, index)=>{
           return <Answer key={index} answer={answer} />
         })}
       </div>
     </div>
    </div>
  );
}

export default App;

import React from 'react';
import Question from './components/Question'
import './App.css';
import Answer from './components/Answer';

function App() {
  return (
    <div className="mainDiv">
     <div className="quizDiv">
       <div className="question">
       <Question />
       </div>
      
       <div className="answers">
         <Answer />
         <Answer />
         <Answer />
         <Answer />
       </div>
     </div>
    </div>
  );
}

export default App;

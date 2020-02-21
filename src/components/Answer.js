import React from 'react'

function Answer({answer, handleClick, index}) {

    return(
        <div style={{width:"calc(50% - 2px)", border:"1px solid blue", height:"calc(50% - 2px)", position:"relative", cursor:"pointer"}} id={`answer${index+1}`}onClick={handleClick}>
            <p style={{position:"absolute", top:"50%", left:"50%",transform:"translate(-50%, -50%)", margin:"0"}}>{answer.answer}</p>
        </div>
    )
}

export default Answer;
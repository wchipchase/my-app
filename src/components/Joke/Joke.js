import React from 'react';

function Joke (props){
  return(
    <div className="joke">
      <p style={{display: props.question ? "blocks" : "none"}}>Question: {props.question}</p>
      <p style={{color: !props.question && 'red'}}>Answer: {props.answer}</p>
    </div>
  )
}

export default Joke;
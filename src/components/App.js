import React, {Component, useState} from "react";
import '../styles/App.css';

const App = (props) => {
  let [slide_no, set_slide] = useState(0);
  function restart() {
    set_slide(0);
  }
  function prev() {
    set_slide(--slide_no);
  }
  function next() {
    console.log(slide_no);
    // 
    console.log(slide_no);
  }
  return (
    <div>
      <h1 data-testid="title">Hello{props.slides[slide_no].title}</h1>
      <p data-testid="text">{props.slides[slide_no].text}</p>
      <button data-testid="button-restart" onClick={()=>{set_slide(0);}} disabled = { slide_no === 0 }>Restart</button>
      <button data-testid="button-prev" onClick={()=>{set_slide(--slide_no);}} disabled = { slide_no === 0 }>Prev</button>
      <button data-testid="button-next" onClick={()=>{set_slide(++slide_no);}} disabled = { slide_no === props.slides.length-1 }>Next</button>
    </div>
  )
}

export default App;

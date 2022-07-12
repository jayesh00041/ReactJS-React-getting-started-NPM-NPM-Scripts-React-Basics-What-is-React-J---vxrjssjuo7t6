import React, {Component, useState} from "react";
import '../styles/App.css';
import slides from "../data";

const App = () => {
  let [slide_no, set_slide] = useState(0);
  function restart() {
    set_slide(0);
  }
  function prev() {
    set_slide(slide_no--);
  }
  function next() {
    set_slide(slide_no++);
  }
  return (
    <div>
      <h1 data-testid="title">{slides[slide_no].title}</h1>
      <p data-testid="text">{slides[slide_no].text}</p>
      <button data-testid="button-restart" onclick="{restart}" disabled = { slide_no === 0 }>Restart</button>
      <button data-testid="button-prev" onclick="{prev}" disabled = { slide_no === 0 }>Prev</button>
      <button data-testid="button-next" onclick="{next}" disabled = { slide_no === slides.length-1 }>Next</button>
    </div>
  )
}

export default App;

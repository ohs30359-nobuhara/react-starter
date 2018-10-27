import React from "react";
import ReactDOM from "react-dom";

const Index = () => {

  fetch('http://0.0.0.0:3000/api').then(response => {
    console.log(response);
  })

  return <div>Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
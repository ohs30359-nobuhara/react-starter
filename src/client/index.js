import React from 'react';
import ReactDOM from 'react-dom';
import { Hello } from './hello'

fetch('http://localhost:3000/api').then(response => {
  console.log(response);
})

ReactDOM.render(<Hello/>, document.getElementById('index'));
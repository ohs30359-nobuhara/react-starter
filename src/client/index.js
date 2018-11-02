import React from 'react';
import ReactDOM from 'react-dom';
import { Hello } from './hello'

fetch('/api').then(response => {
  console.log(response);
})

ReactDOM.render(<Hello/>, document.getElementById('index'));
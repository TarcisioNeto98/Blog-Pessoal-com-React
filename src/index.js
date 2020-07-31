import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Rodape from './rodape';
import Conteiner from './conteiner';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Conteiner />
  </React.StrictMode>,
  document.getElementById('cabecalho')
);

ReactDOM.render(<Rodape />, document.getElementById("rodape"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

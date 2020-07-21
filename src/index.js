import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Menu />
  </React.StrictMode>,
  document.getElementById('cabecalho')
);

var cont = 2;
var painel = document.querySelector(".teste");
painel.className = "";
var botao = document.querySelector("#botao");
botao.addEventListener("click", function(){
  painel.className = (cont % 2 === 0) ? "teste" : "";
  cont++;
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

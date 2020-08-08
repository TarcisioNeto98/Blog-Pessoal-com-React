import React from 'react';
import ReactDOM from 'react-dom';
import './Estilos/index.css';
import Rodape from './Componentes/rodape';
import Menu from './Componentes/Menu';

ReactDOM.render(
  <React.StrictMode>
    <Menu/>
  </React.StrictMode>,
  document.getElementById('cabecalho')
);

ReactDOM.render(<Rodape />, document.getElementById("rodape"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

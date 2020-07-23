import React from 'react';
import './App.css';
//import menu from './img/menu.png';
//import menu from './menu.png';

function Lista(props){
  return (
    <ul className = "">
      <li id = "negacao">Categoria</li>
      <li>Projetos</li>
      <li>Sobre mim</li>
    </ul>
  );
}

class ListaOpcoes extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (this.props.clicado) ? <nav className="menu-lateral"><Lista /></nav> : null;
  }
}

class BotaoMenu extends React.Component{
  constructor(props){
    super(props);
    this.clique = this.clique.bind(this);
    this.state = {clicado: false};
  }

  clique(){
    this.setState((state) => ({clicado: !state.clicado}));
    this.props.BotaoClicado(this.state.clicado);
  }
//<img id = "botao" src={menu} alt="Menu de informações." onClick={this.clique} />
  render(){
    return (
      <div id="post">
        <p id="botao" onClick={this.clique}>&equiv;</p>
      </div>
    );
  }
}

class Menu extends React.Component{
  constructor(props){
    super(props);
    this.state = {clicado: false};
    this.clicarBotao = this.clicarBotao.bind(this);
  }

  clicarBotao(clique){
    this.setState({clicado: clique});
  }

  render(){
    return(
      <div>
        <div className = {(!this.state.clicado) ? "menu sombra" : "menu2"}><BotaoMenu BotaoClicado = {this.clicarBotao}/></div>
        <ListaOpcoes clicado = {this.state.clicado}/>
      </div>
    );
  }
}

export default Menu;
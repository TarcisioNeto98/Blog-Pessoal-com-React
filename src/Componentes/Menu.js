import React from 'react';
import '../Estilos/App.css';
import Contato from '../Paginas/Contato';
import Sobre from '../Paginas/Sobre';
import BotaoMenu from '../Componentes/BotaoMenu';
import {Route, BrowserRouter, Link, Switch} from 'react-router-dom';
//import menu from './img/menu.png';
//import menu from './menu.png';

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
      <BrowserRouter>
        <div>
          <div className = {(!this.state.clicado) ? "menu sombra" : "menu2"}>
            <BotaoMenu BotaoClicado = {this.clicarBotao}/>
          </div>
          <nav className="menu-lateral" id = {(this.state.clicado) ? "desaparecer" : "aparecer"}>
            <ul className = "">
              <li id = "home"><Link to="/">Home</Link></li>
              <li id = "categoria">Categoria</li>
              <li id = "Projetos">Projetos</li>
              <li id = "conversa"><Link to="Contato">Fale Comigo</Link></li>
              <li id = "sobre"><Link to="Sobre">Sobre mim</Link></li>
            </ul>
            <div id="espaco"/>
          </nav>
          <Switch>
            <Route exact path="/">{() => null}</Route>
            <Route exact path="/Contato"><Contato/></Route>
            <Route exact path="/Sobre"><Sobre/></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Menu;
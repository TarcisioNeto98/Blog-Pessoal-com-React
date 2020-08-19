import React from 'react';
import '../Estilos/App.css';
import Contato from '../Paginas/Contato';
import Sobre from '../Paginas/Sobre';
import BotaoMenu from '../Componentes/BotaoMenu';
import {Route, BrowserRouter, Link, Switch, NavLink} from 'react-router-dom';
//import menu from './img/menu.png';
//import menu from './menu.png';

class Menu extends React.Component{
  constructor(props){
    super(props);
    this.state = {clicado: false, hover:{color:'rgb(136, 138, 139)', textDecoration: 'none'}};
    this.clicarBotao = this.clicarBotao.bind(this);
  }

  clicarBotao(clique){
    this.setState({clicado: clique});
  }

  tirarMouse(link){
    this.setState({hover: {color:'rgb(136, 138, 139)', textDecoration: 'none'}});
  }

  render(){
    return(
      <BrowserRouter>
        <div  id = {(this.props.esconder==='invisivel') ? 'invisivel' : ''}>
          <div className = {(!this.state.clicado) ? "menu sombra" : "menu2"}>
            <BotaoMenu BotaoClicado = {this.clicarBotao}/>
          </div>
          <nav className="menu-lateral" id = {(this.state.clicado) ? "desaparecer" : "aparecer"}>
            <ul className = "">
              <li id = "home"><Link style={{textDecoration:'none'}} to="/"><span>Home</span></Link></li>
              <li id = "categoria">Categoria</li>
              <li id = "Projetos">Projetos</li>
              <li id = "conversa"><Link style={{textDecoration:'none'}} to="/Contato"><span>Fale Comigo</span></Link></li>
              <li id = "sobre"><Link style={{textDecoration:'none'}} to="/Sobre"><span>Sobre mim</span></Link></li>
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
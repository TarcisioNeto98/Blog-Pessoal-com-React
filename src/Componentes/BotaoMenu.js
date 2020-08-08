import React from 'react';
import '../Estilos/App.css';

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

  export default BotaoMenu;
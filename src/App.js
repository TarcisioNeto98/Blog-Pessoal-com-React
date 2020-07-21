import React from 'react';
import './App.css';

function lista(props){
  return <ul></ul>
}

class BotaoMenu extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return <img id = "botao" src="https://github.com/TarcisioNeto98/personal-blog/blob/master/img/menu.png?raw=true" alt="Menu de informações."/>;
  }
}

function Menu (props){
  return(
    <div>
      <div className = "menu"><BotaoMenu /></div>
      <p>asddddd</p>
      <div className = "">
        <p>pokemon</p>
      </div>
    </div>
  );
}

class App extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="App"></div>
    );
  }
}

export default Menu;
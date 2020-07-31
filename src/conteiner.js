import React from 'react';
import Menu from './App';
import Formulario from "./Formulario"

class Conteiner extends React.Component{
    constructor(props){
        super(props);
        this.state = {dados:""};
        this.mudarCentro = this.mudarCentro.bind(this);
        this.selecionar = this.selecionar.bind(this);
    }

    selecionar(tipo){
        if(tipo === "conversa") return <Formulario />
        return null;
    }

    mudarCentro(valor){
        this.setState({dados: valor});
        this.setState((state) => ({preenchido: !(state.preenchido)}));
    }
    render(){
        return(
            <section>
                <Menu preenchido = {true} mudar={this.mudarCentro} />
                {this.selecionar(this.state.dados)}
            </section>
        );
    }
}

export default Conteiner;
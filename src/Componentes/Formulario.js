import React from 'react';
import '../Estilos/formulario.css';

class Formulario extends React.Component{

    render(){
        return (
            <div className="formulario">
                <h1>Me envie uma mensagem!</h1>
                <div className="mensagem">
                    <p>Fale comigo, basta preencher os campos devidamente que eu responderei o mais breve possível.</p>
                    <br /><br /><p>Desde já agradeço seu contato!</p><br /><br/>
                </div>
                <form>
                    <input type="text" placeholder="Nome"/>
                    <input type="email" placeholder="Email" /><br/>
                    <textarea placeholder="Digite sua mensagem"></textarea><br/>
                    <input id="botaoEnviar" type="button" value="Enviar" />
                </form>
            </div>
        );
    }
}

export default Formulario;
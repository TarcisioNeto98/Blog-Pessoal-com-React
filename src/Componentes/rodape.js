import React from 'react';
import iconeFacebook from '../img/facebook-icone.png';
import iconeGithub from '../img/github-icone.png';
import iconeInstagram from '../img/instagram-icone.png';
import '../Estilos/rodape.css';
import telefone from '../img/telefone.svg'
import localizacao from '../img/gps-icone.svg'
import email from '../img/email.svg';

class Rodape extends React.Component{
    render(){
        return(
            <div className="rodape">

                <h4>Contato</h4>
                
                <img id="email" src={email} alt="Endereço de email"/>
                <p>tarcisioneto1998@gmail.com</p><br/><br/>

                <img id="localizacao" src={localizacao} alt="Endereço"/>
                <p>Crateús - CE</p><br/><br/>

                <img id="telefone" src={telefone} alt="Icone de telefone de contato."/>
                <p>Telefone</p><br/><br/>

                <div className="facebook">
                    <a href="https://www.google.com.br/"><img src={iconeFacebook} alt="Link de ligação com o Facebook."/></a>
                </div>
                <div className="instagram">
                    <img src={iconeInstagram} alt="Link de ligação com o Instagram."></img>
                </div>
                <div className="github">
                    <img src={iconeGithub} alt="Link de ligação com o Github."/>
                </div>
            </div>
        );
    }
}

export default Rodape;
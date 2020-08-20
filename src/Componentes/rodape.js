import React from 'react';
import Menu from './Menu';
import iconeFacebook from '../img/facebook-icone.png';
import iconeGithub from '../img/github-icone.png';
import iconeInstagram from '../img/instagram-icone.png';
import '../Estilos/rodape.css';
import telefone from '../img/telefone.svg'
import localizacao from '../img/gps-icone.svg'
import email from '../img/email.svg';
/*
*/
class Rodape extends React.Component{
    render(){
        return(
            <div className="rodape">
                <div id="sobreMim">
                    <h1>Sobre Mim</h1>
                    <span>Sou um jovem dedicado que sempre busca se superar.</span>
                    <div id = "redes">
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
                </div>
                <div id="centro">
                    <h1>Contatos</h1>
                    <img style={{display:'none'}} id="email" src={email} alt="Endereço de email"/>
                    <p>E-mail: <span>tarcisioneto1998@gmail.com</span></p><br/><br/>

                    <img style={{display:'none'}} id="telefone" src={telefone} alt="Icone de telefone de contato."/>
                    <p>Fone: <span>Telefone</span></p><br/><br/>

                    <img style={{display:'none'}} id="localizacao" src={localizacao} alt="Endereço"/>
                    <p>Cidade: <span>Crateús - CE</span></p><br/><br/>
                </div>
            </div>
        );
    }
}

export default Rodape;
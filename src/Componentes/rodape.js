import React from 'react';
import iconeFacebook from '../img/facebook-icone.png';
import iconeGithub from '../img/github-icone.png';
import iconeInstagram from '../img/instagram-icone.png';
import '../Estilos/rodape.css';

class Rodape extends React.Component{
    render(){
        return(
            <div className="rodape">
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
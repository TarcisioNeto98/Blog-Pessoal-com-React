import React from 'react';
import cartao from '../img/capa.png';
import sobreMim from '../img/sobreMim.jpg';
import '../Estilos/sobre.css';

class Sobre extends React.Component{
    render(){
        return (
            <section className="sobre">
                <div className="imagem">
                    <h1>Sobre Mim</h1>
                    <hr/>
                    <img id="sobreMim" src={sobreMim} alt="Imagem minha na praia" />
                </div>
                <div className="cartao">
                    <img src={cartao} alt="Cartão de perfil"/>
                    <div className="conteudo">
                        <br/>
                        <div id="conteudoTexto">
                            <p>
                                Meu nome é Tarcísio, criei esse Blog em 2020 
                                para compartilhar dicas e informações sobre programação. 
                                Sempre gostei de programar, já programo em java e javascript. 
                                O objetivo desse blog é trazer informações e inspirações para que os 
                                leitores planejem e comecem a adentrar nesse incrível mundo da programação.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
/*<div>
<p>
    Com 22 anos, sou graduando em Sistemas de Informação na Universidade Federal do Ceará na cidade
    de Crateús, busco sempre aprender novas tecnologias.
</p>
</div>
<br />*/
export default Sobre;
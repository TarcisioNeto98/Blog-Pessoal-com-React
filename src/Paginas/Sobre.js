import React from 'react';
import cartao from '../img/capa.png';
import sobreMim from '../img/sobreMim.jpg';
import '../Estilos/sobre.css';

class Sobre extends React.Component{
    render(){
        return (
                <div id="conteiner">
                <section className="sobre">
                    <div className="imagem">
                        <h1>Sobre Mim</h1>
                        <hr/>
                        <figure>
                            <img id="sobreMim" src={sobreMim} alt="Imagem minha na praia" />
                            <figcaption>Fortaleza 2017</figcaption>
                        </figure>
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
                <div className="sobre-texto">
                    <h1>Seja bem-vindo(a)</h1>
                    <p>Meu nome é Tarcísio Neto, mas pode me chamar de Neto. Tenho 22 anos, sou graduando
                    em  Sistemas de Informação. Programar se tornou minha grande paixão
                    desde quando comecei a enxergar de maneira única cada experiência por que passei. 
                    Tenho um carinho muito grande por todos os meus feitos, pelos lugares onde já 
                    visitei e morei, pelas pessoas que conheci pelo caminho e por tudo que aprendi estudando.</p>
                </div>
            </div>
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
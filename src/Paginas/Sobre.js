import React from 'react';
import sobreMim from '../img/sobreMim.jpg';
import '../Estilos/sobre.css';

class Sobre extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <section className="sobre">
                <h1>Tarcisio Neto</h1>
                <h2>Programador javascript e java</h2>
                <div>
                    <p>
                        Com 22 anos, sou graduando em Sistemas de Informação na Universidade Federal do Ceará na cidade
                        de Crateús, busco sempre aprender novas tecnologias.
                    </p>
                </div>
                <br />
                <img id="sobreMim" src={sobreMim} alt="Imagem minha na praia" />
            </section>
        );
    }
}

export default Sobre;
import React, { Component } from "react";
import './estilo.css'

class App extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            textoFrase: ''
        };

        this.quebraBiscoito = this.quebraBiscoito.bind(this);
        this.frases = ['A persistência é o caminho do êxito.', 
        'No meio da dificuldade encontra-se a oportunidade.',
        'Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo.',
        'Imagine uma nova história para sua vida e acredite nela.',
        'Quando você quer alguma coisa, todo o universo conspira para que você realize o seu desejo.',
        'O insucesso é apenas uma oportunidade para recomeçar com mais inteligência.'];
    }
    
    quebraBiscoito(){
        let state = this.state;
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "';
        this.setState(state)

    }

    render(){
        return(
            <div className="container">
                <h2 className="titulo">Biscoito da sorte</h2>
                <img src={require('./assets/biscoito.png')} className="img"/>
                <Botao nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito}/>
                <h3 className="textoFrase">{this.state.textoFrase}</h3>
            </div>
        );
    }
}

class Botao extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
            </div>
        );
    }
}

export default App;
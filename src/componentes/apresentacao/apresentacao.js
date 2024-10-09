import React from 'react';
import './apresentacao.css';
import Aplicativo from '../../imagens/App GourmetON sec1.png'

function Apresentacao() {
    return (
        <section className="sec1__apresentacao">
            <h1>Transforme cada refeição em uma experiência  incrível</h1>
            <p>Levamos o melhor da gastronomia diretamente à sua porta,
            com rapidez e praticidade.</p>
            <img src={Aplicativo} className='sec1__app'></img>
        </section>
    )
}


export default Apresentacao;
import React from 'react';
import './funcionalidades.css';
import appFrame from '../../imagens/frame app GourmetON.png';


function Funcionalidades() {
    return (
        <section className='sec4__funcionalidades'>
            <img className='sec4__frameCelular' src={appFrame}></img>
            <ul className='sec4__lista'>
                <li>Acompanhe seu pedido em tempo real, desde o preparo até a entrega.</li>
                <li>Recomendações Personalizadas</li>
                <li>Ofertas e Descontos Exclusivos</li>
                <li>Acesso a uma seleção exclusiva de restaurantes que oferecem pratos cuidadosamente preparados.</li>
            </ul>
        </section>
    )
};


export default Funcionalidades;
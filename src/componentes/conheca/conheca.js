import React from "react";
import './conheca.css';
import appSec2 from '../../imagens/App login GourmetON (2).png'


function Conheca() {
    return (
        <section className="sec2__conheca" id="conhecaID">
            <h2>Conheça a GourmetON</h2>
            <div className="sec2__infos">
                <h3>O Gourmet On é o aplicativo de delivery pensado para quem busca muito mais do que apenas uma refeição.</h3>
                <img src={appSec2} alt="app GourmetON LOGIN"></img>
                <h3>Aqui, cada pedido é uma experiência gastronômica única, preparada com cuidado e entregue com rapidez.</h3>
            </div>
        </section>
    )
}


export default Conheca;
import React from "react";
import './depoimentos.css';
import depoimento1 from '../../imagens/depoimentos2.png;

import depoimento2 from '../../imagens/depoimentos2.png;


function Depoimentos () {
    return (
        <section className="sec6__depoimentos">
            <h2>+100 mil Usuários</h2>
            <div>
            <img src={depoimento1} alt="depoimento 1" className="depoimento__principal"></img>
            <img src={depoimento2} alt="depoimento 2" className="depoimentos__desktop"></img>
            </div>
        </section>
    )
}

export default Depoimentos;
import React from "react";
import './formulario.css';

function Formulario() {
    return (
        <section className="formulario">
            <h1>Fique por dentro das promoções</h1>
            <form>
                <input type="text" placeholder="Digite seu email"/>
            </form>
        </section>
    )
}


export default Formulario;
import React from "react";
import './porque.css';
import porque_img from '../../imagens/_import-removebg-preview.png'
import porque_img2 from '../../imagens/vista-superior-sobre-o-banquete-de-comida.jpg'


function Porque() {
    return (
        <section className="porque">
             <h1>Por que a galera só usa GourmetON?</h1>
        <div className="imgs">          
            <img src={porque_img2} alt="porque o Ogurmet on" className="banquete"/>
            <img src={porque_img} alt="porque o gourmet on" className="texto_img"/>
        </div>
        </section>
    )
}


export default Porque;
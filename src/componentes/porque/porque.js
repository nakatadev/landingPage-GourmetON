import React from "react";
import './porque.css';
import porque_img from '../../imagens/_import-removebg-preview.png'
import porque_img2 from '../../imagens/vista-superior-sobre-o-banquete-de-comida.jpg'


function Porque() {
    return (
        <div className="porque">
            <h1>Por que a galera só usa GourmetON?</h1>
            <img src={porque_img2} alt="porque o Ogurmet on" className="banquete"/>
            <img src={porque_img} alt="porque o gourmet on" className="texto_img"/>
        </div>
    )
}


export default Porque;
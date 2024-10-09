import React from 'react';
import './porque.css';
import jantar from '../../imagens/vista superior prato.png';
import conteudo1 from '../../imagens/Imagem_2_sec3_GourmetON-removebg-preview.png';
import conteudo2 from '../../imagens/conteudo sec3 container 2.png';
import motoca from '../../imagens/image-removebg-preview (6).png';



function Porque() {
    return (
        <section className='sec3__porque'>
            <h2>Por que a galera só usa GourmetON?</h2>
            <div className='sec3__containers'>
                <div className='sec3__container1'>
                    <img src={jantar} className='container1__imagem1' alt='jantar'></img>
                    <img src={conteudo1} className='container1__imagem2'></img>
                </div>
                <div className='sec3__container2'>
                    <img src={conteudo2} className='container2__imagem1'></img>
                    <img src={motoca} className='container2__imagem2'></img>
                </div>
            </div>
        </section>
    )
}

export default Porque;
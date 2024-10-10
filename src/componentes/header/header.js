import React from 'react';
import './header.css';
import logo from "../../imagens/logoGourmetDesktop.png";


function Header() {
    return (
        <header className='header'>
            <img src={logo} alt="Logo GourmetON" className="logo" />
            <ul className='lista__nav'>
                <li className='nav__desktop'><a href='#'>Home</a></li>
                <li className='nav__desktop'><a href='#conhecaID'>Sobre</a></li>
                <li className='nav__desktop'><a href='#formularioID'>Contato</a></li>
                <li>Baixe agora</li>
            </ul>
        </header>
    );
};

export default Header;
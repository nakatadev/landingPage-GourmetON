import React from "react";
import './footer.css';
import logo from "../../imagens/logoGourmetDesktop.png";
import insta from "../../imagens/image-removebg-preview 2.png";
import face from "../../imagens/Facebook_logo__square_-removebg-preview 2.png";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src={logo} alt="Logo Gourmet On" />
            </div>
            <div className="footer-contact">
                <p>Dúvidas ou sugestões? Entre em contato com nossa equipe de suporte pelo e-mail:</p>
                <p>contato@gourmeton.com</p>
            </div>
            <div className="footer-social">
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                    <img src={insta} alt="Instagram" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                    <img src={face} alt="Facebook" />
                </a>
            </div>
            <div className="footer-links">
                <a href="#">[Termos de Uso]</a>
                <span>|</span>
                <a href="#">[Política de Privacidade]</a>
                <span>|</span>
                <a href="#">[FAQ]</a>
            </div>
            <div className="footer-copyright">
                <p>© 2024 Gourmet On. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;

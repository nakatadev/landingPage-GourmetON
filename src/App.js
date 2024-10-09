import React from 'react';
import Header from './componentes/header/header.js';
import Apresentacao from './componentes/apresentacao/apresentacao.js';
import Conheca from './componentes/conheca/conheca.js';
import Porque from './componentes/porque/porque.js';
import Formulario from './componentes/formulario/formulario.js';
import Footer from './componentes/footer/footer.js';

function App() {
    return (
        <div className='App'>
            <Header />
            <Apresentacao />
            <Conheca />
            <Porque />
            <Formulario />
            <Footer />
        </div>
    )
};

export default App;
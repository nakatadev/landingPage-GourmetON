import React from 'react';
import Header from './componentes/header/header.js';
import Apresentacao from './componentes/apresentacao/apresentacao.js';
import Conheca from './componentes/conheca/conheca.js';
import Porque from './componentes/porque/porque.js';
import Funcionalidades from './componentes/funcionalidades/funcionalidades.js';

function App() {
    return (
        <div className='App'>
            <Header />
            <Apresentacao />
            <Conheca />
            <Porque />
            <Funcionalidades />
            
        </div>
    )
};

export default App;
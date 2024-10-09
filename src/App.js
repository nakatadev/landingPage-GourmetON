import React from 'react';
import Header from './componentes/header/header.js';
import Apresentacao from './componentes/apresentacao/apresentacao.js';
import Conheca from './componentes/conheca/conheca.js';

function App() {
    return (
        <div className='App'>
            <Header />
            <Apresentacao />
            <Conheca />
        </div>
    )
};

export default App;
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import React, { useState } from "react";
import Areas from './componentes/Areas/Areas.js';

const areas = [
    'Computadores',
    'Acessórios',
    'Impressoras',
    'Games',
    'Gadgets'
];

function App() {
    const [produtos, setProdutos] = useState([]);

    const adicionarProduto = (produto) => {
        setProdutos(produtos.concat(produto));
    };

    return (
        <div className='App'>
            <Header />
            <Formulario aoCadastrarProduto={adicionarProduto} />
            {areas.map(area => (
                <Areas
                    key={area}
                    nome={area}
                    produtos={produtos}
                />
            ))}
        </div>
    );
}

export default App;

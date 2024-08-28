import React from "react";
import './Areas.css';
import Lista from '../Lista/Lista'; 

const Areas = (props) => {
    const corDeFundo = { backgroundColor: '#ecf0f1' };
    const corSublinhado = { borderColor: '#2c3e50' };

    const produtosDaArea = props.produtos.filter(produto => produto.Seção === props.nome);

    return (
        <section className="area" style={corDeFundo}>
            <h3 style={corSublinhado}>{props.nome}</h3>
            <Lista objeto={produtosDaArea} />
        </section>
    );
}

export default Areas;

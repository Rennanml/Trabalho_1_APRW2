import React from "react";
import './Lista.css';

const Lista = ({ objeto = [] }) => {
    const obterCaminhoImagem = (marca) => {
        switch (marca.toLowerCase()) {
            case 'hp':
                return './Images/hp.png';
            case 'dell':
                return './Images/dell.png';
            case 'positivo':
                return './Images/positivo.png';
            case 'asus':
                return './Images/asus.png';
            case 'xing ling':
                return './Images/xingling.png';
            default:
                return null;
        }
    }

    return (
        <div className='lista'>
            <h2>Produtos Cadastrados</h2>
            {objeto.length === 0 ? (
                <p>Nenhum produto cadastrado!</p>
            ) : (
                <div className='cards-container'>
                    {objeto.map((produto, index) => (
                        <div key={index} className='card'>
                            <img src={obterCaminhoImagem(produto.Marca)} alt={produto.Marca} className='marca-imagem' />
                            <div className='card-content'>
                                <h4>{produto.Nome}</h4>
                                <p>R${produto.Preço}</p>
                                <p className="estado">{produto.Estado}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Lista;

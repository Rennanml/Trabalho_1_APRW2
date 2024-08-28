import React, { useState } from 'react';
import './Formulario.css';
import CampoNumero from '../CampoNumero/CampoNumero';
import CampoTexto from '../CampoTexto/CampoTexto';
import Dropdown from '../Dropdown/Dropdown';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';

const Formulario = (props) =>{
    const aoSalvar = (e) =>{
        e.preventDefault();
        console.log('Submetido!', secao, marca, nome, preco, estadoProduto);
        const produto = (
            {
                "Seção": secao,
                "Marca": marca,
                "Nome": nome,
                "Preço": preco,
                "Estado": estadoProduto
            }
        )
        props.aoCadastrarProduto(produto)
    };

    const aoAlterarCheckbox = (estadoSelecionado) => {
        setEstadoProduto(estadoSelecionado);
    }

    const secoes = [
        'Computadores',
        'Acessórios',
        'Impressoras',
        'Games',
        'Gadgets'
    ]

    const marcas = [
        'HP',
        'Dell',
        'Positivo',
        'Asus',
        'Xing Ling' 
    ]

    const [secao, setSecao] = useState('Computadores');
    const[marca, setMarcas] = useState('HP');
    const [nome, setNome] = useState('');
    const[preco, setPreco] = useState('');
    const [estadoProduto, setEstadoProduto] = useState('usado');




    return (
        <form className='form-container' onSubmit={aoSalvar}>
            <h2>Cadastre um produto</h2>
            <Dropdown label='Seção' itens={secoes} aoAlterado={valor => setSecao(valor)}></Dropdown>
            <Dropdown label='Marca' itens={marcas} aoAlterado={valor=>setMarcas(valor)}></Dropdown>
            <CampoTexto label='Nome' placeholder='Digite aqui' aoAlterado = {valor => setNome(valor)}></CampoTexto>
            <CampoNumero label='Preço (R$)' aoAlterado={valor => setPreco(valor)}></CampoNumero>
            <Checkbox aoAlterado={aoAlterarCheckbox} selecionado={estadoProduto}></Checkbox>
            <Button texto='Cadastrar'></Button>
        </form>
    )
}

export default Formulario;
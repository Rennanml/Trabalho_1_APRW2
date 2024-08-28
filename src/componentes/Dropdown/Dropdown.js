import React from 'react';

const Dropdown = (props) =>{

    const aoEscolhido = (e) =>{
        props.aoAlterado(e.target.value);
    }

    return (
        <div>
            <label>{props.label}</label>
            <select onChange={aoEscolhido}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Dropdown;
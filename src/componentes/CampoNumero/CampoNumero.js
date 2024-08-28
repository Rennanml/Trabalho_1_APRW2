import React from "react";

const CampoNumero = (props) =>{

    const aoDigitado = (e) => {
        props.aoAlterado(e.target.value)
    }


    return (
        <div>
            <label>{props.label}</label>
            <input onChange={aoDigitado} type="number"></input>
        </div>
    )
}

export default CampoNumero;
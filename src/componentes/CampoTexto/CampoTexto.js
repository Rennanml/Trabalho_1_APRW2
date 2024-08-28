const CampoTexto = (props) => {

    const aoDigitado = (e) => {
        props.aoAlterado(e.target.value)
    }
    

    return (
        <div className="campotexto">
            <label>{props.label}</label>
            <input onChange={aoDigitado} type='text' placeholder={props.placeholder}></input>
        </div>
    )
}

export default CampoTexto;
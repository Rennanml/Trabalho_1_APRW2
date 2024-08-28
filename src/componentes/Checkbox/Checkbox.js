const Checkbox = (props) => {

    const aoDigitado = (e) => {
        const { name } = e.target;
        props.aoAlterado(name);
    }

    return (
        <div>
            <label>{props.label}</label>
            <div>
                <label>
                    <input onChange={aoDigitado} type='radio' name='usado' checked={props.selecionado === 'usado'} /> Usado
                </label>
                <label>
                    <input onChange={aoDigitado} type='radio' name='novo' checked={props.selecionado === 'novo'} /> Novo
                </label>
            </div>
        </div>
    );
}

export default Checkbox;

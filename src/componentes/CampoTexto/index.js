import React from 'react';
import './CampoTexto.css';

const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo_texto">
            <label htmlFor={props.nome}>
                {props.label}
            </label>
            <input
                autoFocus={props.focus}
                onChange={aoDigitado}
                value={props.valor}
                name={props.nome}
                required={props.obrigatorio}
                placeholder={props.placeHolder}
            />
        </div>
    );
}

export default CampoTexto;

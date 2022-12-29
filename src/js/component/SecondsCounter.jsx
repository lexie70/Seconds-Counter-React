import React from "react";
//  con el props que es un short para properties podemos usar informacion declarada en el parent element
// podemos usar elementos declarados de un parent a un child

const SecondsCounter = (props) => {

    return(
        <span className="app d-flex justify-content-center text-bg-dark p-3 fs-1 ">
            <div className=" box icon"><p className="far fa-clock me-3"></p></div>
            <div className=" box me-3">{props.horaDecena}</div>
            <div className=" box me-3">{props.hora}</div>
            <div className=" box me-3">{props.minutoDecena}</div>
            <div className=" box me-3">{props.minuto}</div>
            <div className=" box me-3">{props.decenasSegundos}</div>
            <div className=" box me-3">{props.segundos}</div>
        </span>
    )
};


export default SecondsCounter;
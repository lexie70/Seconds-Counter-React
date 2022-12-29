//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondsCounter from "./component/SecondsCounter.jsx";

//render your react application
// Declarar las variables de las medidas de tiempo que vamos a utilizar en la funcion

let segundos= 0;
let decenasSegundos = 0;
let minuto = 0;
let minutoDecena = 0;
let hora = 0;
let horaDecena = 0;

// se aumenta por 1 en cada variable y luego con if statement se limita hasta donde queremos que llegue el contador
setInterval(() => {
            segundos++;
            if (segundos > 9) {
                segundos = 0;
                decenasSegundos++;
                if (decenasSegundos > 5) {
                    decenasSegundos = 0;
                    minuto++;
                    if (minuto > 9) {
                        minuto = 0;
                        minutoDecena++;
                        if (minutoDecena > 5) {
                            minutoDecena = 0;
                            hora++;
                            if (horaUnit > 9) {
                                horaUnit = 0;
                                horaDecena++;
                            }
                        }
                    }
                }
            }
// con esta funcion nativa de react se especifica que queremos renderizar y donde
            ReactDOM.render( < SecondsCounter segundos = {segundos} decenasSegundos = {decenasSegundos} minuto= {minuto}
                 minutoDecena = {minutoDecena} hora = {hora} horaDecena = {horaDecena}/>,
                  document.querySelector("#app"));
            }, 1000);
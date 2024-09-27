/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const quien = [" el perro ", " mi abuela ", " mi pajaro ", " el cartero"];
  const hizo = [" se comió ", " rompió ", " tiró ", " perdió "];
  const que = [" mis deberes ", " mi movil ", " mi cartera "];
  const cuando = [
    " despues de clases. ",
    " cuando yo estaba durmiedo. ",
    " mientras comía. ",
    " mientras yo estaba jugando. ",
    " mientras hacia ejercicio. "
  ];

  function generarExcusa() {
    const Sujeto = quien[Math.floor(Math.random() * quien.length)];
    const Accion = hizo[Math.floor(Math.random() * hizo.length)];
    const Objeto = que[Math.floor(Math.random() * que.length)];
    const Tiempo = cuando[Math.floor(Math.random() * cuando.length)];

    let respuestaFinal = ` ${Sujeto} ${Accion} ${Objeto} ${Tiempo}`;
    document.getElementById("respuesta").innerText = respuestaFinal;
  }
  document.getElementById("generador").addEventListener("click", () => {
    generarExcusa();
  });
};

function añadirtarea() {
const contenedor = document.getElementById("contenedor");
const añadirtexto = document.getElementById("titulotarea");

const divtarea = document.createElement ("div");
divtarea.className = "tarea";

const para = document.createElement("p");
para.innerText= añadirtexto.value;

divtarea.appendChild(para);
contenedor.appendChild(divtarea);
}



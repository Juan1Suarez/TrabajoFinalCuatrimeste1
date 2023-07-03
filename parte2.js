function añadirtarea() {
    const contenedor = document.getElementById("contenedor");
    const agregartexto = document.getElementById("tituloTarea")
    
    const divtarea = document.createElement ("div");
    divtarea.className = "tarea"
    
    const para = document.createElement("p");
    para.innerText= "titulotarea.value";
    
    divtarea.appendChild(para);
    contenedor.appendChild(divtarea);
    }
    
    const inicializarJs = () => {
        dibujarTabla();
      
        const boton = document.getElementById("agregarTarea");
        boton.addEventListener('click', function (e) {
          agregarTareaFija();
        });
      }
      
      window.addEventListener('load', inicializarJs);
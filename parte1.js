const esEmailValido = (email) => {
  const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
  return emailRegex.test(email)
}


const enviarFormulario = () => {
  let formularioCorrecto = true;
  const nombreInput = document.getElementById('nombre');
  const apellidoInput = document.getElementById('apellido');
  const emailInput = document.getElementById('email');
  const telInput = document.getElementById('tel');
  const codigoInput = document.getElementById('codigo');
  



  if (nombreInput.value.trim().length < 3) {
    document.getElementById('error-nombre').innerHTML = "El nombre debe tener al menos 3 caracteres";
    formularioCorrecto = false;
  } else {
    document.getElementById('error-nombre').innerHTML = "";

  }

  if (apellidoInput.value.trim().length < 3) {
    document.getElementById('error-apellido').innerHTML = "El apellido debe tener al menos 3 caracteres";
    formularioCorrecto = false;
  } else {
    document.getElementById('error-apellido').innerHTML = "";
  }


  if (emailInput.value.trim() == "") {
    document.getElementById('error-email').innerHTML = "El email es necesario";
    formularioCorrecto = false;
  } else if (!esEmailValido(emailInput.value)) {
    document.getElementById('error-email').innerHTML = "Direccion de email incorrecta";
    formularioCorrecto = false;
  } else {
    document.getElementById('error-email').innerHTML = ""
  }

  if (telInput.value.trim().length < 6) {
    document.getElementById('error-tel').innerHTML = "El telefono debe tener al menos 6 numeros";
    formularioCorrecto = false;
  } else {
    document.getElementById('error-tel').innerHTML = ""
  }



  if (codigoInput.value.trim().length < 4) {
    document.getElementById('error-codigo').innerHTML = "El codigo postal debe tener al menos 4 caracteres";
    formularioCorrecto = false;
  } else {
    document.getElementById('error-codigo').innerHTML = "";
  }






if(formularioCorrecto) {
  console.log("nombre ", nombreInput.value);
  console.log("apellido", apellidoInput.value);
  console.log("email", emailInput.value);
  console.log("tel", telInput.value);
  console.log("codigo", codigoInput.value);

} else{
  console.log("Formulario incorrecto")
}

}







const inicializarJs = () => {
  const boton = document.getElementById("enviar");
  boton.addEventListener('click', function (e) {
    enviarFormulario();
  });


}
window.addEventListener('load', inicializarJs);



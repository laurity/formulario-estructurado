const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#correo");
const telefono = document.querySelector("#telefono");
const mensaje = document.querySelector("#mensaje");
const enviar = document.querySelector("#enviar");
const errores = document.querySelector("#errores");

let mensajesError = [];

//Es una función
const validar = (evento) => {
  //Evitar que se envíe el formulario
  evento.preventDefault();

  // Vaciar los mensajesErrores antes de rellenarlo nuevamente
  mensajesError = [];

  // VALIDACIONES

  switch (true) {
    // Nombre como campo obligatorio
    case nombre.value.trim().length === 0:
      mensajesError = mensajesError.concat("El campo nombre es obligatorio");

    //Nombre con caracteres válidos
    case !/^[a-zA-Z0-9]*$/.exec(nombre.value.trim()):
      mensajesError = mensajesError.concat(
        "El campo nombre solo acepta caracteres alfanuméricos"
      );

    //Correo electrónico válido
    case !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
      correo.value.trim()
    ):
      mensajesError = mensajesError.concat(
        "El campo correo electrónico no es válido"
      );

    //El teléfono debe de ser válido
    case !/^[679]\d{8}$/.exec(telefono.value.trim()):
      mensajesError = mensajesError.concat("El campo teléfono no es válido");

    //Evitar mensajes cortos
    case mensaje.value.trim().length < 10:
      mensajesError = mensajesError.concat(
        "El campo mensaje debe de tener al menos 10 caracteres"
      );
  }

  // Enviar o Mostrar mensajes de error
  if (
    mensajesError.length === 0 &&
    confirm("¿Estás seguro/a de enviar el formulario?")
  ) {
    formulario.submit();
  } else if (mensajesError.length > 0) {
    errores.textContent = "";
    mensajesError.forEach(function (mensaje) {
      const miLi = document.createElement("li");
      miLi.textContent = mensaje;
      errores.appendChild(miLi);
    });
  }
};
formulario.addEventListener("submit", validar);


let contador = 0;

function agregar() {
  if (document.getElementById("nuevoValue").value != "") {

    contador = contador + 1;
    let nuevoValue = document.getElementById("nuevoValue").value;/*Trae el valor del input, nombre de la tarea */
    let nodo = document.getElementById("tareas1"); /*tareas1 es el Id de la etiqueta section */

    let nodoli = document.createElement("li");
    nodoli.id = `liNumero${contador}`;
    nodoli.innerHTML = `${nuevoValue}
  <select name="" id="" class="form-select tareasAgregadas">
  <option value="">Pendiente de asignación</option>
  <option value="">Jose</option>
  <option value="">Aldana</option>
  <option value="">Manuel</option>
  <option value="Concluido">Finalizado</option>
  </select>
  <input value="Desea Borrar?" id="${contador}" class="Btn_borrar" type="button">  `;
    nodo.appendChild(nodoli);

    asignaEventoBtnNegroBorrar(contador);
  }
}

function agregaBorrar() {
  for (let i = 0; i < document.getElementsByClassName("tareasAgregadas").length; i++) {
    let borrarFinalizado = document.getElementsByClassName("tareasAgregadas")[i].value
    if (borrarFinalizado == "Concluido") {
      document.getElementsByClassName("Btn_borrar")[i].style.display = "inline";
    } else {
      document.getElementsByClassName("Btn_borrar")[i].style.display = "none";
    }
  }
}

function asignaEventoBtnNegroBorrar(numeroDeIDBotonNegro) {

  let nodoBorrar = document.getElementById(numeroDeIDBotonNegro);
  nodoBorrar.addEventListener("click", function () {
    let nodo = document.getElementById(`liNumero${numeroDeIDBotonNegro}`);
    nodo.remove();
  });
}



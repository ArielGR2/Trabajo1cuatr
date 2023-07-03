
let contador = 0;

function agregar() {
if (document.getElementById("nuevoValue").value!="") {
  
  contador = contador + 1;
  let nuevoValue = document.getElementById("nuevoValue").value;/*Trae el valor del input, nombre de la tarea */
  let nodo = document.getElementById("tareas1");
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
  console.log(contador + " Es el valor de contador");

  asignaEventoBtnNegroBorrar(contador);
  }  
}



/*document.getElementById("Btn_agregarTareas").addEventListener("submit", function (e) {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
});*/
/*let vectorBorrar = new Array(3);
vectorBorrar = [0, 0, 0];*/


function agregaBorrar() {
  for (let i = 0; i < document.getElementsByClassName("tareasAgregadas").length; i++) {
    let borrarFinalizado = document.getElementsByClassName("tareasAgregadas")[i].value
    if (borrarFinalizado == "Concluido") {
      document.getElementsByClassName("Btn_borrar")[i].style.display = "inline";
/*      vectorBorrar[i] = 1;*/
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

/*  nodoBorrar[numeroDeIDBotonNegro].addEventListener("click", asigna(numeroDeIDBotonNegro) )*/
  /*console.log("Se presionó el boton: " + e.target.id);*/

/*
  for (let i = 0; i < document.getElementsByClassName("tareasAgregadas").length; i++) {
    document.getElementsByClassName("Btn_borrar")[i].style.display = "none";
  }*/





/*document.getElementsByClassName("tareasAgregadas")[0];*/

/*let btns = document.querySelectorAll('.boton_borrar');
for(let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', borraLinea(0));
 }*/

/*e.srcElement.parentNode.id* No funciona*/

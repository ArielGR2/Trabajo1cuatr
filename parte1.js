
function imprimePorConsola() {

    let nombre = document.getElementById("nombre").value;
    let tipo = document.getElementById("tipo").value;
    let marca = document.getElementById("marca").value;
    let gama = document.getElementById("gama").value;
    let mail = document.getElementById("mail").value;
    let check = document.getElementById("acepta").checked;
    let acepta = "";
    if (check == true) {
        acepta = "acepta";
    } else {
        acepta = "NO acepta";
    }
    if (nombre != "" && mail != "") {
        console.log("El cliente " + nombre + " ha solicitado información sobre " + tipo + " de la marca " + marca + " de " + gama);
        console.log("Se debe remitir la información al mail: " + mail);
        console.log("El cliente " + acepta + " recibir publicidad");
    } else {
        console.log("Debe ingresar los datos correctamente")
    }

}

/*  let form = document.getElementById("form");
    form.addEventListener("submit", function(e) {
    e.preventDefault();    
}) */
let amigos = [];

function agregarAmigo() {
    let  nombre = document.getElementById("amigo").value;

    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        
    }else{
        amigos.push(nombre);
    mostrarLista();
    document.getElementById("amigo").value = "";
    }
    
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
       

        let botonNombre = document.createElement("button");
        botonNombre.textContent = amigos[i];
        botonNombre.onclick = function() {
            eliminarAmigo(i);
        };

        li.appendChild(botonNombre);
        lista.appendChild(li);
    }
}

function eliminarAmigo(i) {
    amigos.splice(i, 1);
    mostrarLista();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos participantes.");
    }

    let amigosDisponibles = amigos.slice();
    let resultado = [];

    for (let i = 0; i < amigos.length; i++) {
        let posibles = amigosDisponibles.filter(function(a) {
            return a !== amigos[i];
        });

        if (posibles.length === 0) {
            alert("Un participante se quedo fuera ☹️, intenta de nuevo");
        
        }

        let elegido = posibles[Math.floor(Math.random() * posibles.length)];
        resultado.push(amigos[i] + " 🎁➡️ " + elegido);

        let indice = amigosDisponibles.indexOf(elegido);
        amigosDisponibles.splice(indice, 1);
    }

    mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";

    for (let i = 0; i < resultado.length; i++) {
        let li = document.createElement("li");
        li.textContent = resultado[i];
        listaResultado.appendChild(li);
    }
}

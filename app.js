const amigos = []; // Lista donde se almacenarán los nombres ingresados

// Función para agregar amigos a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo"); // Obtiene el input de texto
    const nombre = input.value.trim(); // Obtiene el valor del input y elimina espacios en blanco

    if (nombre === "") { // Evita agregar nombres vacíos
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) { // Evita agregar nombres duplicados
        alert("Ese nombre ya ha sido ingresado.");
        return;
    }

    amigos.push(nombre); // Agrega el nombre a la lista
    actualizarLista(); // Actualiza la lista en la interfaz
    input.value = ""; // Limpia el campo de entrada
}

// Función para actualizar la lista mostrada en la pantalla
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Borra el contenido anterior

    amigos.forEach((nombre) => {
        const item = document.createElement("li"); // Crea un nuevo elemento de lista
        item.textContent = nombre; // Asigna el nombre al elemento
        lista.appendChild(item); // Lo agrega a la lista en el HTML
    });
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) { // Se necesitan al menos 2 amigos para hacer el sorteo
        alert("Debe ingresar al menos dos nombres para sortear.");
        return;
    }

    let asignaciones = {};
    let disponibles = [...amigos]; // Copia la lista de amigos para modificar sin afectar la original

    for (let amigo of amigos) {
        let posibles = disponibles.filter((a) => a !== amigo); // Evita que se autoasigne

        if (posibles.length === 0) { // Si el último nombre queda solo, se reinicia el sorteo
            sortearAmigo();
            return;
        }

        let indice = Math.floor(Math.random() * posibles.length); // Selecciona un índice aleatorio
        let asignado = posibles[indice]; // Obtiene el nombre asignado
        asignaciones[amigo] = asignado;

        // Elimina al asignado de la lista disponible
        disponibles = disponibles.filter((a) => a !== asignado);
    }

    mostrarResultado(asignaciones);
}

// Función para mostrar el resultado en la interfaz
function mostrarResultado(asignaciones) {
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "";

    for (let [amigo, asignado] of Object.entries(asignaciones)) {
        const item = document.createElement("li"); // Crea un nuevo elemento de lista
        item.textContent = `${amigo} → ${asignado}`; // Asigna el texto con la relación
        resultadoElement.appendChild(item); // Lo agrega a la lista en el HTML
    }
}

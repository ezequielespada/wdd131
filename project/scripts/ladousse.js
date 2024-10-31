document.getElementById("form-suscripcion").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    
    // Validar el correo electrónico
    if (!email) {
        mostrarMensaje("Por favor ingresa un correo electrónico válido.", "error");
        return;
    }

    // Almacenar el correo en localStorage
    let suscriptores = JSON.parse(localStorage.getItem("suscriptores")) || [];
    
    // Evitar duplicados
    if (!suscriptores.includes(email)) {
        suscriptores.push(email);
        localStorage.setItem("suscriptores", JSON.stringify(suscriptores));
        mostrarMensaje("¡Gracias por suscribirte, " + nombre + "!", "success");
        document.getElementById("form-suscripcion").reset(); // Limpiar el formulario
    } else {
        mostrarMensaje("Ya estás suscrito.", "info");
    }
});

// Función para mostrar mensajes
function mostrarMensaje(mensaje, tipo) {
    const mensajeDiv = document.getElementById("mensaje-suscripcion");
    mensajeDiv.textContent = mensaje;
    mensajeDiv.style.display = "block";

    // Cambiar el color del mensaje según el tipo
    switch (tipo) {
        case "success":
            mensajeDiv.style.color = "green";
            break;
        case "error":
            mensajeDiv.style.color = "red";
            break;
        case "info":
            mensajeDiv.style.color = "blue";
            break;
    }
}

//Footer
const yearElement = document.getElementById('currentyear');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

const lastModifiedElement = document.getElementById('lastModified');
if (lastModifiedElement) {
    lastModifiedElement.textContent = 'Last Modified: ' + document.lastModified;
}
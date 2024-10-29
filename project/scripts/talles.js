function calcularTalle() {
    // Obtener valores de entrada y convertirlos a enteros
    const caderas = parseInt(document.getElementById("caderas").value);
    const cintura = parseInt(document.getElementById("cintura").value);
    const pecho = parseInt(document.getElementById("pecho").value);

    // Verificar que los valores son números válidos
    if (isNaN(caderas) || isNaN(cintura) || isNaN(pecho)) {
        alert("Por favor ingrese valores numéricos válidos para todas las medidas.");
        return;
    }

    // Limpiar resultados previos
    const recomendacionesDiv = document.getElementById("recomendaciones");
    recomendacionesDiv.innerHTML = "";
    document.getElementById("resultados").style.display = "none";

    // Determinar tipo de cuerpo según las medidas
    let tipoCuerpo = determinarTipoCuerpo(caderas, cintura, pecho);

    // Obtener recomendaciones según tipo de cuerpo
    const seleccionados = obtenerRecomendaciones(tipoCuerpo);

    // Mostrar recomendaciones con formato de productos destacados
    mostrarRecomendaciones(seleccionados, recomendacionesDiv);

    // Mostrar el contenedor de resultados
    document.getElementById("resultados").style.display = "block";
}

function determinarTipoCuerpo(caderas, cintura, pecho) {
    if (caderas > pecho && caderas > cintura) {
        return "A"; // Ancho en caderas
    } else if (pecho > caderas && pecho > cintura) {
        return "V"; // Ancho en pecho
    } else {
        return "E"; // Distribución equilibrada
    }
}

function obtenerRecomendaciones(tipoCuerpo) {
    const recomendaciones = [
        {
            tipo: "A",
            modelos: [
                { src: "images/a-female-01.jpg", descripcion: "Diseño cómodo en las caderas, perfecto para libertad de movimiento." },
                { src: "images/a-female-02.jpg", descripcion: "Ajuste ceñido en torso y amplio en caderas para comodidad." },
                { src: "images/a-female-03.jpg", descripcion: "Corte estilizado, confortable y espacioso en la parte inferior." },
                { src: "images/a-male-01.jpg", descripcion: "Diseño cómodo en las caderas, perfecto para libertad de movimiento." },
                { src: "images/a-male-02.jpg", descripcion: "Ajuste ceñido en torso y amplio en caderas para comodidad." },
                { src: "images/a-male-03.jpg", descripcion: "Corte estilizado, confortable y espacioso en la parte inferior." }
            ]
        },
        {
            tipo: "E",
            modelos: [
                { src: "images/e-female-01.jpg", descripcion: "Estilo clásico que proporciona un ajuste uniforme y balanceado." },
                { src: "images/e-female-02.jpg", descripcion: "Diseño recto y cómodo para un look profesional y relajado." },
                { src: "images/e-female-03.jpg", descripcion: "Ajuste uniforme, ideal para actividades diarias." },
                { src: "images/e-male-01.jpg", descripcion: "Estilo clásico que proporciona un ajuste uniforme y balanceado." },
                { src: "images/e-male-02.jpg", descripcion: "Diseño recto y cómodo para un look profesional y relajado." },
                { src: "images/e-male-03.jpg", descripcion: "Ajuste uniforme, ideal para actividades diarias." }
            ]
        },
        {
            tipo: "V",
            modelos: [
                { src: "images/v-female-01.jpg", descripcion: "Ajuste amplio en el pecho y cómodo en la cintura." },
                { src: "images/v-female-02.jpg", descripcion: "Ideal para torso ancho, ofrece comodidad todo el día." },
                { src: "images/v-female-03.jpg", descripcion: "Diseño estilizado, amplio en la parte superior." },
                { src: "images/v-male-01.jpg", descripcion: "Ajuste amplio en el pecho y cómodo en la cintura." },
                { src: "images/v-male-02.jpg", descripcion: "Ideal para torso ancho, ofrece comodidad todo el día." },
                { src: "images/v-male-03.jpg", descripcion: "Diseño estilizado, amplio en la parte superior." }
            ]
        }
    ];

    // Filtrar recomendaciones según tipo de cuerpo
    return recomendaciones.find(recomendacion => recomendacion.tipo === tipoCuerpo).modelos;
}

function mostrarRecomendaciones(modelos, contenedor) {
    modelos.forEach(modelo => {
        const modeloDiv = document.createElement("div");
        modeloDiv.classList.add("product-card"); // Clase para estilo de producto destacado

        const img = document.createElement("img");
        img.src = modelo.src;
        img.alt = modelo.descripcion; 
        img.classList.add("modelo-imagen"); // Clase específica para las imágenes

        const descripcion = document.createElement("p");
        descripcion.textContent = modelo.descripcion;
        descripcion.classList.add("modelo-descripcion"); // Clase para las descripciones

        modeloDiv.appendChild(img);
        modeloDiv.appendChild(descripcion);
        contenedor.appendChild(modeloDiv);
    });
}

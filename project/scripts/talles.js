document.getElementById('talle-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const genero = document.getElementById('genero').value;
    const tipoCuerpo = document.getElementById('tipo-cuerpo').value;

    // Mensaje de bienvenida al usuario
    let mensaje = `<h3>Recomendaciones para ${genero === "hombre" ? "hombres" : "mujeres"} con distribución ${tipoCuerpo}</h3>`;

    // Productos recomendados según la selección
    const recomendaciones = [
        { nombre: 'Casaca Médica Isabelle', tipo: 'A', genero: 'mujer' },
        { nombre: 'Chaqueta Médica Paris', tipo: 'Rectangular', genero: 'hombre' },
        { nombre: 'Chaqueta Médica Paris', tipo: 'V', genero: 'mujer' },
        // Añadir más productos según los requerimientos
    ];

    // Filtrar productos que coinciden con género y tipo de cuerpo
    const modelosFiltrados = recomendaciones.filter(modelo => modelo.genero === genero && modelo.tipo === tipoCuerpo);

    // Mostrar recomendaciones
    if (modelosFiltrados.length > 0) {
        mensaje += "<ul>";
        modelosFiltrados.forEach(modelo => {
            mensaje += `<li>${modelo.nombre}</li>`;
        });
        mensaje += "</ul>";
    } else {
        mensaje += "<p>No hay recomendaciones para esta selección.</p>";
    }

    document.getElementById('resultados').innerHTML = mensaje;
});

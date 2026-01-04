function calcularRuta() {

    const origen = document.getElementById("origen").value.trim();
    const destino = document.getElementById("destino").value.trim();
    const hora = document.getElementById("hora").value.trim();

    if (!origen || !destino || !hora) {
        abrirModal();
        return;
    }

    // Simulación de predicción
    const tiempoBase = Math.floor(Math.random() * 50) + 30; 
    const ocupacion = Math.floor(Math.random() * 50) + 40;

    let recomendacion = "";

    if (ocupacion < 50) {
        recomendacion = "Ocupación baja, viaje cómodo";
    } else if (ocupacion < 70) {
        recomendacion = "Ocupación media, planifique con tiempo";
    } else {
        recomendacion = "Alta ocupación, considere salir antes";
    }

    document.getElementById("tiempoEstimado").innerText = tiempoBase + " minutos";
    document.getElementById("ocupacion").innerText = ocupacion + "%";
    document.getElementById("recomendacion").innerText = recomendacion;

    document.getElementById("resultados").style.display = "block";
}

// MODAL
function abrirModal() {
    document.getElementById("modal").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

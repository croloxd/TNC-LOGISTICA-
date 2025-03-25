const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue

    btn.value = '¡ENVIADO!';

    const serviceID = 'default_service';
    const templateID = 'template_1136cwb';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Enviar';
            this.reset(); // 🔹 Limpia todos los campos del formulario
        }, (err) => {
            btn.value = 'Enviar';
            console.error("Error:", err); // Muestra errores en la consola
        });
});



// Función para mostrar la alerta inmediatamente después de enviar
function mostrarAlerta(mensaje) {
    document.getElementById('alert-message').innerText = mensaje;
    document.getElementById('custom-alert').style.display = 'flex';
}

// Función para cerrar la alerta
function cerrarAlerta() {
    document.getElementById('custom-alert').style.display = 'none';
}

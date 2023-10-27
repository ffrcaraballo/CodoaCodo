document.addEventListener("DOMContentLoaded", function () {
    const registroForm = document.getElementById("registroForm");

    registroForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Puedes agregar aquí la lógica para enviar los datos a tu servidor o almacenarlos localmente.

        console.log("Registro exitoso:");
        console.log("Nombre: " + nombre);
        console.log("Correo Electrónico: " + email);
        console.log("Password: " + password);

        // Redirigir al usuario a la página de inicio de sesión
        window.location.href = "index2.html"; // Cambia "login.html" por la URL de tu página de inicio de sesión
    });
});

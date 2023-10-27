// Define un objeto para almacenar las credenciales de usuario (solo con fines de demostración).
const usuariosRegistrados = [
    { email: "usuario@example.com", contrasena: "password123" },
    { email: "otrousuario@example.com", contrasena: "123456" },
];

// Función para verificar las credenciales del usuario
function verificarCredenciales(email, contrasena) {
    for (const usuario of usuariosRegistrados) {
        if (usuario.email === email && usuario.contrasena === contrasena) {
            return true;
        }
    }
    return false;
}

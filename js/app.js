

/*document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('login-form').classList.add('active');
});

function toggleForm(formType) {
    if (formType === 'login') {
        document.getElementById('login-form').classList.add('active');
        document.getElementById('register-form').classList.remove('active');
    } else {
        document.getElementById('login-form').classList.remove('active');
        document.getElementById('register-form').classList.add('active');
    }
};*/
document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos los botones y el formulario
    const btnIniciarSesion = document.getElementById('btn-iniciar-sesion');
    const btnRegistrarse = document.getElementById('btn-registrarse');
    const formulario = document.getElementById('formulario');

    // Añadimos eventos de clic a los botones
    btnIniciarSesion.addEventListener('click', function() {
        mostrarFormulario('Iniciar Sesión');
    });

    btnRegistrarse.addEventListener('click', function() {
        mostrarFormulario('Registrarse');
    });

    function mostrarFormulario(tipo) {
        document.getElementById('login-form').classList.add('active')
        // Cambiamos el título del formulario según el tipo
        formulario.querySelector('h2').textContent = tipo;
        // Mostramos el formulario
        formulario.classList.remove('oculto');
    }

});



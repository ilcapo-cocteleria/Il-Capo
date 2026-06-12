document.getElementById('formulario-login').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const usuarioCorrecto = "El Capo";
    const passwordCorrecto = "Riservato";

    const usuarioIngresado = document.getElementById('username').value;
    const passwordIngresada = document.getElementById('password').value;
    
    const mensajeError = document.getElementById('mensaje-error');

    if (usuarioIngresado === usuarioCorrecto && passwordIngresada === passwordCorrecto) {
        mensajeError.style.display = 'none';
        alert('Bienvenido al Club......');
        window.location.href = "main.html";
        
     
    } else {
      
        mensajeError.style.display = 'block';
    }
});


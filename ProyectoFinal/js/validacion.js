document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario-contacto');
  
    formulario.addEventListener('submit', function (e) {
      e.preventDefault(); // Evita que el formulario se envíe automáticamente
  
      // Obtener los valores de los campos
      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const telefono = document.getElementById('telefono').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();
  
      // Verificar si alguno está vacío
      if (!nombre || !email || !telefono || !mensaje) {
        alert("Por favor, completa todos los campos.");
        return;
      }
  
      // Si todo está lleno, mostrar mensaje de éxito
      alert("Formulario enviado con éxito");
    });
  });
  
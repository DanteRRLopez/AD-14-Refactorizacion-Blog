// Actualiza el año del footer
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// Manejo del formulario de contacto: muestra alerta Bootstrap y “resetea” el form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

  if (!form || !alertPlaceholder) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Construimos una alerta Bootstrap “dismissible”
    alertPlaceholder.innerHTML = `
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Mensaje enviado.</strong> ¡Gracias por contactarnos!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
      </div>
    `;

    form.reset();
  });
});

function updateHour() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
  document.getElementById("hora").value = formattedDateTime;
}

window.onload = function () {
  updateHour();
};

form = document.getElementById("registroForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  submitForm();
});

function submitForm() {
  const autorizacion = document.getElementById("autorizacion");
  const autorizacionValue = autorizacion.value;

  if (autorizacionValue) {
    fetch("/addAuthorization/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 'autorizacion':autorizacionValue }),
    })
      .then(async (response) => {
        const data = await response.json();

        if (!response.ok) {
          // Manejo de errores HTTP
          throw new Error(data.message || "Error en la solicitud");
        }

        // Si todo va bien:
        Swal.fire({
          title: "¡Exito!",
          text: "Autorizacion correctamente agregada",
          icon: "success",
        });

        autorizacion.value = ''        

      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
        });
      });
  } else {
    Swal.fire({
        title: "Error!",
        text: 'Ingresa una autorizacion POR FAVOR.',
        icon: "error",
      });
  }
}

setInterval(updateHour, 60 * 1000);


let maxReservas = 100;

let reservas = localStorage.getItem('reservasDiarias');
if (reservas === null) {
  reservas = maxReservas;
  localStorage.setItem('reservasDiarias', reservas);
}

document.getElementById('reservas-disponibles').textContent = reservas;

function reservarCompra() {
  let actuales = parseInt(localStorage.getItem('reservasDiarias'));

  if (actuales > 0) {
    actuales -= 1;
    localStorage.setItem('reservasDiarias', actuales);
    document.getElementById('reservas-disponibles').textContent = actuales;
    document.getElementById('mensaje-reserva').innerText = "✅ ¡Compra reservada! Nos pondremos en contacto por correo.";
  } else {
    document.getElementById('mensaje-reserva').innerText = "❌ Se han alcanzado las 100 reservas de hoy. Vuelve mañana.";
  }
}

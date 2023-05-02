// Función para generar un número aleatorio entre 1 y 10
function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

// Función para mostrar el número de vuelo y el terminal en la página
function showFlightInfo() {
    var flightNumber = document.getElementById("flight-number");
    var terminal = document.getElementById("terminal");

    // Generar un número de vuelo aleatorio entre 1 y 100
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    flightNumber.innerHTML = "Vuelo #" + randomNumber;

    // Generar un número de terminal aleatorio entre 1 y 10
    var terminalNumber = generateRandomNumber();
    terminal.innerHTML = "Terminal " + terminalNumber;
}

// Función para mostrar la hora y fecha en la página

    var currentDate = new Date();
    var date = currentDate.getDate() + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getFullYear();
    var time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    // Asignar la fecha del vuelo al elemento correspondiente
    var flightDate = document.getElementById("flight-date");
    flightDate.innerHTML = date;

// Asignar la hora del vuelo al elemento correspondiente
    var flightTime = document.getElementById("flight-time");
    flightTime.innerHTML = time;



// Función para mostrar la alerta de los documentos necesarios
function showDocumentsAlert() {
    alert("Recuerde llevar los documentos necesarios para abordar el avión.");
}
/*
// Mostrar la información del vuelo y terminal por primera vez
(showFlightInfo());

// Mostrar la hora y fecha en tiempo real cada segundo
setInterval(showDateTime, 1000);

// Refrescar el número de vuelo y terminal cada 10 segundos
setInterval(showFlightInfo, 10000);

// Mostrar la alerta de los documentos necesarios después de 5 segundos
setTimeout(showDocumentsAlert, 5000);*/

document.addEventListener('DOMContentLoaded', function() {
    showFlightInfo();
    setInterval(showDateTime, 1000);
    setInterval(showFlightInfo, 10000);
    setTimeout(showDocumentsAlert, 5000);
  });
  
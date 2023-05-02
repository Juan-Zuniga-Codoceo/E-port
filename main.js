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
    flightNumber.innerHTML = "#" + randomNumber;
  
    // Generar un número de terminal aleatorio entre 1 y 10
    var terminalNumber = generateRandomNumber();
    terminal.innerHTML = terminalNumber;
  }
  
  // Función para mostrar la hora y fecha en la página
  function showDateTime() {
    var currentDate = new Date();
    var date = currentDate.getDate() + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getFullYear();
    var time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
  
    // Asignar la fecha del vuelo al elemento correspondiente
    var flightDate = document.getElementById("flight-date");
    flightDate.innerHTML = date;
  
    // Asignar la hora del vuelo al elemento correspondiente
    var flightTime = document.getElementById("flight-time");
    flightTime.innerHTML = time;
  }
  
  // Función para mostrar la alerta de los documentos necesarios
  function showDocumentsAlert() {
    var popup = document.getElementById("documents-popup");
    //mostrar el pop-up
    popup.style.display = "block";
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    showFlightInfo();
    setInterval(showDateTime, 1000);
    setInterval(showFlightInfo, 10000);
    setTimeout(function() {
      showDocumentsAlert();
    }, 1000); // cambia el tiempo en milisegundos a tu preferencia
  
    //seleccionar el pop-up
    var popup = document.getElementById("documents-popup");
    popup.style.display = "block";
    popup.classList.add("highlight");
    //agregar evento click al botón cerrar
    document.getElementById("documents-button").addEventListener("click", function() {
      popup.style.display = "none";
    });
  });
  

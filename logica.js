var segundos = 0;
var minutos = 0;
var horas = 0;
var intervalo;

// a cada 5 seggundos é 1 minuto
// a cada 2 min é 1 hora 

function contarSegundos() {
  
    if (segundos <= 5) {
      document.getElementById("segundos").innerHTML = segundos;
      segundos++;
      console.log("Os segundos são " + segundos);
    } else if (segundos > 5) {
      segundos -= segundos ;
      document.getElementById("segundos").innerHTML = segundos;
    }
 
}

function contarMinutos() {
 
    if (segundos > 5) {
      if (minutos < 6) {
        minutos++;
        document.getElementById("minutos").innerHTML = minutos;
        console.log("Os minutos são " + minutos);
      } else if (minutos >= 6) {
        minutos -= minutos;
        document.getElementById("minutos").innerHTML = minutos;
      }
    }

}

function contarHoras()   {
 
    if ((minutos % 2 == 0) & (minutos != 0) & (segundos > 5)) {
      if (horas < 6) {
        ++horas;
        document.getElementById("horas").innerHTML = horas;
        console.log("As horas são " + horas);
      } else if (horas >= 6) {
        horas -= horas;
        document.getElementById("horas").innerHTML = horas;
      }
    }
 
}   

function comecar() {
  intervalo = setInterval(function () {
    contarSegundos();
    contarMinutos();
    contarHoras();
  },1000);
}


function reiniciar() {
  location.reload();
}

function parar() {
  clearInterval(intervalo);
	
}
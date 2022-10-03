const mostrar = (id) => {
  document.getElementById(id).innerHTML = "X";
};
let turno = 1;
let figura = "";
let Tabla = new Array(3);
let Ganador = false;
let Empate = false;
let score1=0;
let score2=0;
let nuevoJuego=false;


asignarFigura = () => {
  if (turno == 1) {
    figura = "X";
    turno = 2;
    document.getElementById("player1").style.color="gray";  
    document.getElementById("player2").style.color="white";
  } else if (turno == 2) {
    figura = "O";
    turno = 1;
    document.getElementById("player1").style.color="white";
    document.getElementById("player2").style.color="gray";
  
  }
};
pintarFigura = (posicion) => {
  if(Ganador){
    return false;
  }
  asignarFigura();
  if(ingresarFigura(posicion)){
    document.getElementById(posicion).innerHTML = figura;
    document.getElementById(posicion).style.pointerEvents="none";
  }
  validarPartida();
};

const iniciarTabla = () => {
  let contador = 0;
  for (let i = 0; i < Tabla.length; i++) {
    Tabla[i] = new Array(3);
    for (let j = 0; j < Tabla[0].length; j++) {
      Tabla[i][j] = contador += 1;
    }
  }
};
const ingresarFigura = (posicion) => {
  for (let i = 0; i < Tabla.length; i++) {
    for (let j = 0; j < Tabla[0].length; j++) {
      if (posicion == Tabla[i][j]) {
        Tabla[i][j] = figura;
        console.log("sisepudonea")
        return true;

      }
    }
  }
  return false;
};
const validarTabla = () => {
  let puntos = 0;

  for (let i = 0; i < Tabla.length; i++) {
    for (let j = 0; j < Tabla[0].length; j++) {
      if (figura == Tabla[i][j]) {
        puntos += 1;
        if (puntos == 3) {
          console.log("Ganador por filas");
          Ganador = true;
        }
      }
    }
    puntos = 0;
  }
  //Ganador por columnas
  for (let i = 0; i < Tabla.length; i++) {
    for (let j = 0; j < Tabla[0].length; j++) {
      if (figura == Tabla[j][i]) {
        puntos += 1;
        if (puntos == 3) {
          console.log("Ganador por columnas");
          Ganador = true;
        }
      }
    }
    puntos = 0;
  }

  //Ganador primera diagonal
  if (figura == Tabla[0][0] && figura == Tabla[1][1] && figura == Tabla[2][2]) {
    //alert("Ganador primera diagonal")
    Ganador = true;
  }
  //Ganador segunda diagonal
  if (figura == Tabla[2][0] && figura == Tabla[1][1] && figura == Tabla[0][2]) {
    //alert("Ganador segunda diagonal")
    Ganador = true;
  }
  for (let i = 0; i < Tabla.length; i++) {
    for (let j = 0; j < Tabla[0].length; j++) {
      if ("X" == Tabla[i][j] || "O" == Tabla[i][j]) {
        puntos += 1;
        console.log(puntos);
        if (puntos == 9) {
          //alert("Ganador por filas");
          return (Empate = true);
        }
      }
    }
  }
  puntos = 0;
};
validarPartida = () => {
  validarTabla();
  player1 = document.getElementById("player1").value;
  player2 = document.getElementById("player2").value;

  if (Ganador) {
    if (turno == 2) {
    document.getElementById('winner').innerHTML=`El Ganador es ${player1}`;
    document.getElementById('modal').showModal();
      score1+=1;
      document.getElementById('sp1').innerHTML=score1;
      nuevoJuego=true;
    }
    if (turno == 1) {
        document.getElementById('winner').innerHTML=`El Ganador es ${player2}`;
        document.getElementById('modal').showModal();
      score2+=1;
      document.getElementById('sp2').innerHTML=score2;
      nuevoJuego=true;
    }
  }
  if (Empate) {
    document.getElementById('winner').innerHTML=`Empate`;
    document.getElementById('modal').showModal();
    nuevoJuego=true;
  }

};
nuevaPartida=()=>{
limpiarVista();
 figura = "";
 Tabla = new Array(3);
 Ganador = false;
 Empate = false;
 nuevoJuego=false;
 setTimeout (iniciarTabla(),50);
 document.getElementById('modal').close();
}
const  limpiarVista=()=>{

        document.getElementById("1").innerHTML = ""; 
        document.getElementById("2").innerHTML = ""; 
        document.getElementById("3").innerHTML = ""; 
        document.getElementById("4").innerHTML = ""; 
        document.getElementById("5").innerHTML = ""; 
        document.getElementById("6").innerHTML = ""; 
        document.getElementById("7").innerHTML = ""; 
        document.getElementById("8").innerHTML = ""; 
        document.getElementById("9").innerHTML = ""; 
        document.getElementById('1').style.pointerEvents="all";
        document.getElementById('2').style.pointerEvents="all";
        document.getElementById('3').style.pointerEvents="all";
        document.getElementById('4').style.pointerEvents="all";
        document.getElementById('5').style.pointerEvents="all";
        document.getElementById('6').style.pointerEvents="all";
        document.getElementById('7').style.pointerEvents="all";
        document.getElementById('8').style.pointerEvents="all";
        document.getElementById('9').style.pointerEvents="all";

      }

const keyboard=()=>{
  let tecla= event.keyCode;

  if(tecla==96){
    alert("si gonorrea")
    
}

if(tecla==97){
    pintarFigura('7');

}

if(tecla==98){
    pintarFigura('8');
}

if(tecla==99){
    pintarFigura('9');
}

if(tecla==100){
    pintarFigura('4');
}

if(tecla==101){
    pintarFigura('5');
}

if(tecla==102){
    pintarFigura('6');
}

if(tecla==103){
    pintarFigura('1');
}

if(tecla==104){
    pintarFigura('2');
}
if(tecla==105){
    pintarFigura('3');
}
}
window.onkeydown=keyboard;
window.onload = () => {
  iniciarTabla();
 
  
};


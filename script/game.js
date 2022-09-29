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
  } else if (turno == 2) {
    figura = "O";
    turno = 1;
  }
};
pintarFigura = (posicion) => {
  asignarFigura();
  ingresarFigura(posicion);
  document.getElementById(posicion).innerHTML = figura;
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
      }
    }
  }
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
        
}
window.onload = () => {
  iniciarTabla();
  
};

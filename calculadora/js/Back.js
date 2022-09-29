let arreglo=[];
let operador="";
let inicializador = Number.MIN_VALUE;
let num1 = inicializador;
let num2 = inicializador;
let Total=0;
let reset=false;

const mostrar=(num)=>{
    if(Total!=0 && operador==""){
        document.getElementById('res').innerHTML="";
        num1=inicializador;
        Total=0;
    }
    reset=false;
    document.getElementById('write').innerHTML+=num;
    arreglo.push(num);
    if(operador!=""){
    pintar()
    }

}
const cambio=(op)=>{
    operador=op;
    if(Total!=0){
        num1=Total;
    }else{
        
        convertidor(1);
    }
    document.getElementById('operacion').innerHTML=op;
    document.getElementById('res').innerHTML=num1;
    document.getElementById('write').innerHTML="";
    arreglo=[];
}
const operar=()=>{
    if(arreglo.length==0){
        return alert("está vacio no se puede opera")
    }
    if (operador == "+"){suma()};
    if (operador == "-"){resta()};
    if (operador == "*"){multiplicacion()};
    if (operador == "/"){division()};
}

const suma =()=>{
    convertidor(2);
    Total = num1 + num2;
}
const resta=()=>{
    convertidor(2);
    Total = num1 - num2;
}
const multiplicacion=()=>{
    convertidor(2);
    Total = num1 * num2;
}
const division=()=>{
   
    convertidor(2);
    Total = num1 / num2;
}
const pintar=()=>{
        operar();
        document.getElementById('res').innerHTML=Total;
}
const resultado =()=>{
    document.getElementById('operacion').innerHTML="";
    document.getElementById('write').innerHTML="";
    num2=0;
    arreglo=[]
    operador=""
}
const borrar=()=>{
    if(reset){
        window.location.reload();
    }
    arreglo.pop();
    let a= arreglo.join("");
    document.getElementById('write').innerHTML=a;

if(arreglo.length==0){
    reset=true;
}
}

const convertidor=(caso)=>{
    if(caso==1){
        
        num1=arreglo.toString();
        num1=arreglo.join("");
        if(arreglo.includes(".")){
            return num1= parseFloat(num1); 
        }
       return num1= parseInt(num1);   
    }
    else if(caso==2){
        num2=arreglo.toString();
        num2=arreglo.join("");
        if(arreglo.includes(".")){
            return num2= parseFloat(num2 ); 
        }
       return num2= parseInt(num2);  
    }
}
const resetData=()=>{
 arreglo=[];
 operador="";
 inicializador = Number.MIN_VALUE;
 num1 = inicializador;
 num2 = inicializador;
 Total=0;
 reset=false;
 document.getElementById('operacion').innerHTML="";
    document.getElementById('write').innerHTML="";

document.getElementById('res').innerHTML="";
}
const teclas=()=>{
    let tecla= event.keyCode;
    if(tecla==32){
        alert("funciona nea")
    }
    if(tecla==110){
        mostrar('.');
    }

    if(tecla==96){
        mostrar(0);

    }
    if(tecla==97){
        mostrar(1);
    }

    if(tecla==98){
        mostrar(2);
    }

    if(tecla==99){
        mostrar(3);
    }

    if(tecla==100){
        mostrar(4);
    }

    if(tecla==101){
        mostrar(5);
    }

    if(tecla==102){
        mostrar(6);
    }

    if(tecla==103){
        mostrar(7);
    }

    if(tecla==104){
        mostrar(8);
    }
    if(tecla==105){
        mostrar(9);
    }
    if(tecla==106){
        cambio('*');
    }
    if(tecla==107){
        cambio('+');
    }if(tecla==109){
        cambio('-');
    }if(tecla==111){
        cambio('/');
    }
    if(tecla==13){
       resultado()
    }
    if(tecla==8){
        borrar()
     }
     if(tecla==27){
        alert("Done!!")
     resetData()
    }
}
window.onkeydown=teclas;

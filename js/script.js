let arreglo=[];
let num1;
let operador="";
let doble=0;
let num2=Number.MAX_VALUE;
var resultado=0;
let continua=0;
const mostrar=(num)=>{
    let write= document.getElementById('write');
    arreglo.push(num);
    write.innerHTML+=num;
    
}
const borrar=()=>{
    let write= document.getElementById('write');
    arreglo.pop();
let a=arreglo.join("");
write.innerHTML=a;
if(arreglo.length==0){
    resultado=0;
    let res= document.getElementById('res');
    res.innerHTML="";

}
}
const suma =()=>{
    
    num2=arreglo.toString();
    num2=arreglo.join("");
    console.log(num2 +"sssssss")
    num2= parseInt(num2);
    resultado = num1 + num2;
}
const resta=()=>{
    num2=arreglo.toString();
    num2=arreglo.join("");
    num2= parseInt(num2);
    resultado = num1 - num2;
}
const multiplicacion=()=>{
    num2=arreglo.toString();
    num2=arreglo.join("");
    num2= parseInt(num2);
    resultado = num1 * num2;
}
const division=()=>{
   
    num2=arreglo.toString();
    num2=arreglo.join("");
    num2= parseInt(num2);
    resultado = num1 / num2;
}

const cambio =(op)=>{
    
    operador=op;
    continua+=1;
  
    if(continua > 1){
        console.log('entré')
    result()
    }
    if(resultado!=0){
        num1=resultado;
        console.log('estamos en 2')
    }else{
        console.log(continua);
        num1=arreglo.toString();
        num1=arreglo.join("");
       num1= parseInt(num1);    
       console.log('estamos en 3')
    }
    let operar =document.getElementById('operacion'); 
    let res= document.getElementById('res');
       let write= document.getElementById('write');
        res.innerHTML=num1;
        write.innerHTML="";
        operar.innerHTML=op;
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
const result=()=>{
    operar()
    let ope=document.getElementById('operacion');
    let res= document.getElementById('res');
    let write= document.getElementById('write');
    res.innerHTML=resultado;
    write.innerHTML="";
    ope.innerHTML="";
    num2=0;
}
const reset=()=>{
     arreglo=[];
     num1=0;
     operador="";
     num2=0;
     resultado=0;
     continua=0;
}
const teclas=()=>{
    let tecla= event.keyCode;
    if(tecla==32){
        alert("funciona nea")
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
       result()
    }
    if(tecla==8){
        borrar()
     }
     if(tecla==27){
        alert("Done!!")
        borrar()
     reset()
    }
}
window.onkeydown=teclas;
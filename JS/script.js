
//FUNCIÓN PARA CALCULO DE INTERESES EN BASE AL MONTO SIMULADO POR PLAZO INGRESADO

function calculo_interes ( monto, n_cuotas){
    
    monto = parseFloat (monto);
    n_cuotas = parseInt (n_cuotas);

     

    if (monto > 0 && n_cuotas == 12){
        let interes = monto + (monto * 0.30);
        return interes
    }
    else if ( monto > 0 && n_cuotas == 18){
        let interes = monto + (monto * 0.40);
        return interes
    }
    else if (monto > 0 && n_cuotas == 24){
        let interes = monto + (monto * 0.60);
        return interes
    }
    else {
        console.log ("Error lectura, solo se permite plazos definidos: 12, 18 o 24")
    }

   

}




//BIENVENIDA AL SISTEMA DE SIMULADOR WEB


let nombre_usuario = prompt ("Ingrese su nombre")
console.log("Bienvenido a nuestro simulador web", nombre_usuario)


let consulta_simulador = prompt ("Desea simular su crédito: SI o NO")


//BUCLE DE INICIO

while (consulta_simulador != "SI"){
alert ("Gracias por su visita");
nombre_usuario = prompt ("Ingrese su nombre")
console.log("Bienvenido a nuestro simulador web", nombre_usuario)
consulta_simulador = prompt ("Desea simular su crédito: SI o NO")

}




//RESPUESTA VISIBLE EN CONSOLA AL RESULTADO DE LA SIMULACIÓN


let monto = prompt ("Ingrese monto a simular");
let n_cuotas = prompt (" Ingrese parámetro de cuotas: 12, 18 0 24");
let valor_cuota = (calculo_interes(monto, n_cuotas))/ n_cuotas;
valor_cuota = parseInt (valor_cuota);




console.log("Monto simulado: ", monto);
console.log("Plazo: ", n_cuotas);
console.log("Valor cuota mensual: ", valor_cuota);
console.log("Costo total crédito: ", calculo_interes(monto, n_cuotas));


let continuar = prompt ("Desea realizar otra simulación: SI o NO");
    if ( continuar == "NO"){
    console.log (" Muchas gracias por tu visita. Vuelve pronto!!");

    }



while (continuar == "SI"){

    

    monto = prompt ("Ingrese monto a simular")
    n_cuotas = prompt (" Ingrese parámetro de cuotas: 12, 18 0 24")
    valor_cuota = (calculo_interes(monto, n_cuotas))/ n_cuotas;
    valor_cuota = parseInt (valor_cuota);
    
   
    
    console.log("Monto simulado: ", monto);
    console.log("Plazo: ", n_cuotas);
    console.log("Valor cuota mensual: ", valor_cuota);
    console.log("Costo total crédito: ", calculo_interes(monto, n_cuotas));
       

    continuar = prompt ("Desea realizar otra simulación: SI o NO")


    
        if ( continuar == "NO"){
            console.log (" Muchas gracias por tu visita. Vuelve pronto!!");
        
        }
       
    

}



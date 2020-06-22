function maskify(n_card) {
    var to_show = n_card.substring(n_card.length-4);
    var to_hide = n_card.substring(0,n_card.length-4);
    var hide="";
    for (var i = 1; i <= to_hide.length; i++) {
        if (i==5 || i==9) {
            hide = hide + " #"
        } else {
            hide = hide + "#"
        }
    }
    return hide+" "+to_show
}


function isValid(n_card) {
     //funcion que me permite separar los elementos de los numeros mayores a diez y podelos convertir en enteros mediante parseInt
    function sumaNumeros(numero){
        let numerostring = numero.toString().split("")
        return parseInt(numerostring[0]) + parseInt(numerostring[1])
    }

    let numeroTarjeta = n_card.split("")
    let arregloPares = [];
    let arregloImpares = [];
    var suma=0;
    //arreglo de con 16 digitos de la tarjeta que contiene for que me permite sacar los numeros que estan en los indices pares y multiplicarlos por dos
    //numeroDeTarjeta2.toString()
    for (var i=0; i<numeroTarjeta.length;i=i+2){
        let numerosPares = numeroTarjeta[i]*2
        if (numerosPares<10){
            arregloPares.push(numerosPares)
        }
    else {
        let numeroConcatenado = sumaNumeros(numerosPares)
        arregloPares.push(numeroConcatenado)
        }
    }
    //console.log(arregloPares)
    for (var i=1; i<numeroTarjeta.length;i=i+2){
        let numerosImpares = parseInt(numeroTarjeta[i])
        arregloImpares.push(numerosImpares)
    }
    //console.log(arregloImpares)
    for (var i=0; i<arregloPares.length; i++){
        suma += arregloPares[i] + arregloImpares[i]
    }
    if (suma%10 == 0) {
        return "La tarjeta es valida"
    }   else {
        return "La tarjeta es invalida"
    }
}


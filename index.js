//BOTON
document.getElementById("Validation_button").addEventListener("click", function(){Result()});

//ACCION
Result = () => {
    var n_card = document.getElementById("number").value.replace(/\s+/g, '');
    if (!/\D/.test(n_card)) {
        if (n_card.length == 16) {
            document.getElementById("number").value = maskify(n_card);
            document.getElementById("result").innerHTML = isValid(n_card);
            verResultados.style.display = "block";
        } else {
            window.alert("Ingrese 16 digitos por favor")
        }
    } else {
        window.alert("Ingrese solo numeros por favor")
    }
}



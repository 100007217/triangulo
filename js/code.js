function triangulo() {
    let filas = document.getElementById('filas').value;
    var textofila = "";
    var textocompleto = ""
    if (filas < 0) {
        alert("No metas un numero negativo porfa")
    } else {
        for (let columna = 0; columna < 1; columna++) {

            //console.log('Recursion por columna' + columna)
            for (let fila = 0; fila < filas; fila++) {
                //console.log('Recursion por fila' + fila)
                textofila = textofila + "#"
                console.log(textofila)
                textocompleto = textocompleto + "<br>"
                textocompleto = textocompleto + textofila
            }
            textofila = ""
        }
        document.getElementById("viva").innerHTML = textocompleto;
    }
}
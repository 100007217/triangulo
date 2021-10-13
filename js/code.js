var textofila = "";
var textocompleto = ""
var filas = prompt("Cuantas filas")
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
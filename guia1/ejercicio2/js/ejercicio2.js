function init() {
//Elemento div donde se mostrará el menú de las operaciones
var operaciones = document.getElementById('operaciones');
//Elemento div donde se mostrarán los resultados
var resultado = document.getElementById('resultados');
//Creando el contenido de la página

const Yardas = 1.094, pulgadas=39.37, Pies = 3.281;

var contenido = "<header>\n";
contenido += "\t<h1>Metros A</h1>\n";
contenido += "</header>\n";
contenido += "<nav class='menu'>\n";
contenido += "<ul>\n";
contenido += "\t<li>\n";
contenido += "\t\t<a href=\"javascript:void(0)\"><span>Metros a Yarda</span></a>\n";
contenido += "</li>\n";
contenido += "\t<li>\n";
contenido += "\t\t<a href=\"javascript:void(0)\"><span>Metros a pulgadas</span></a>\n";
contenido += "</li>\n";
contenido += "\t<li>\n";
contenido += "\t\t<a href=\"javascript:void(0)\"><span>Metros a Pies</span></a>\n";
contenido += "</li>\n";
contenido += "</ul>\n";
contenido += "</nav>\n";
//Colocar el contenido dentro del elemento div
operaciones.innerHTML = contenido;

//Preparando el manejo del evento click sobre los enlaces del menú
var opciones = document.getElementsByTagName('a');
//Recorrer todos los elementos de enlace (elementos a)
//y asignar el manejador del evento click

for(var i=0; i<opciones.length; i++){
switch(i){

    case 0:
    //Función metros a yardas
    opciones[i].onclick = function(){
        var metros = prompt('Introduzca los metros que quiere convertir','');
        resultado.innerHTML = "<p class=\"letterpress\">" + metros + " Metros son iguales a " + (parseFloat(metros) * Yardas) + " Yardas" +"</p>\n";
    }
    break;
    
    case 1:
        //Función metros a pulgadas
        opciones[i].onclick = function(){
            var metros = prompt('Introduzca los metros que quiere convertir','');
        resultado.innerHTML = "<p class=\"letterpress\">" + metros + " Metros son iguales a " + (parseFloat(metros) * pulgadas) + " Pulgadas" +"</p>\n";
    }
    break;

    case 2:
        //Función metros a Pies
    opciones[i].onclick = function(){
        var metros = prompt('Introduzca los metros que quiere convertir','');
        resultado.innerHTML = "<p class=\"letterpress\">" + metros + " Metros son iguales a " + (parseFloat(metros) * Pies) + " Pies" +"</p>\n";
    }
    break;


}

}
}
window.onload = init;
//variables
var celsius = prompt('Ingresar los grados Celsius a convertir','');
var respuesta;
respuesta = "<h3>";
respuesta +=" " + celsius + " Celsius Equivalen a";
respuesta += " " + ((parseFloat(celsius) * 9/5) + 32) + " fahrenheit";
document.write(respuesta);
function saltos(valor) {
    var acumulado = 0;
    return function() {
      acumulado += valor; 
      return acumulado;   
    };
  } 

var quintos = saltos(5);
quintos(); // retorna 5
quintos(); // retorna 10
quintos(); // retorna 15

alert(quintos());
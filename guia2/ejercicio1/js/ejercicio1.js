var num = prompt("Ingrese un numero entero", "");
var i,k=0, j=0;
var cifras, sumaCifras, SumaImp=0, sumaPar=0, allsuma=0, menor=1, mayor=0, valor;
if(num%1 == 0 && !isNaN(num) && num){

    for(i=1; i <= num; i++){

        if(i%2==0){
            k++;
            sumaPar = sumaPar + i;
        }

        if(i%2==1){ 
            j++;
            SumaImp = SumaImp + i;
        }    

        valor = i+1;
        if(i<valor){
            mayor = i;
        }else{
            menor = i;
        }

        allsuma = allsuma + i;

        if(i==num){
            document.write("<h1>El numero de cifras  es de: " + i + "</h1>");
            document.write("<h1>Las cifra Impares son: " + j + "</h1>");
            document.write("<h1>Las cifra Pares son: " + k + "</h1>");
            document.write("<h1>La suma de las cifra Pares son: " + sumaPar + "</h1>");
            document.write("<h1>La suma de las cifra Impares son: " + SumaImp + "</h1>");
            document.write("<h1>La suma de todas las cifra  son: " + allsuma + "</h1>");
            document.write("<h1>El numero menor en la cifra es : " + menor + "</h1>");
            document.write("<h1>El numero mayor en la cifra es : " + mayor + "</h1>");

        }
        
    }
    }else{
    alert("Error, Datos incorrectos");
    }
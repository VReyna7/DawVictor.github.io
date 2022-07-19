var produc =  new Array();
var precio = new Array();
var bandera=true, s=true, tabla;
var i=0,k=0,j=0;
var respuesta=0;

do{
    if(s){
        do{
            
            produc[i] = prompt("Ingrese el producto", "");
            precio[i] = prompt('Ingrese el precio del producto', "");
            if(produc[i] && precio[i] && parseInt(precio[i])){
                    do {
                        respuesta = prompt("Escriba 1, sí gusta continuar ingresando datos, 2 si gusta finalizar la entrada de datos", "");
                        if(parseInt(respuesta)){
                            if(respuesta == 1)
                            {
                                i++;
                            }else if( respuesta == 2){
                                bandera = false;
                                s=false;
                            }else{
                                bandera=true;
                            }
                        }else{
                            bandera = true;
                        }
                    }while(bandera)
    
            }else{
                s=true;
            }
        }while(s);
    }

    document.write("<table border='Solid 1px black'>")
    document.write(" <td>Productos</td>   <td>Precio</td>")

    for(k=0; k<=i; k++){
        document.write("<tr>  <td>"+ produc[k] +"</td>   <td>"+precio[k]+"</td></tr>")
    }
    document.write("</table>")


}while(k<=i);
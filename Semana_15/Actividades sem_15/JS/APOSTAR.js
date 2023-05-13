function apostar(){
    // generar numero aleatorion con metodo matematico random 
    var a = Math.round(Math.random()*10);// generar un numero random 
    document.getElementById("resultado"). value = a;
    // asignar numero ingereso al azar
    var b= document.getElementById("apostado").value;
    //verificar acierto
    if(a==b){
        document.getElementById("salida").value="GANO";
    }
    else{
        document.getElementById("salida").value="SIGUE INTENTANDO";
    }
}
function cancel(){
    document.getElementById("apostado").value="";
    document.getElementById("resultado").value="";
    document.getElementById("salida").value="";
}
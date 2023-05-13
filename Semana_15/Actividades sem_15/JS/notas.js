function limpiar(){
    document.getElementById("Nota1").value="";//  borrra el contenido de todas las casillas y resultados
    document.getElementById("Nota2").value="";
    document.getElementById("Nota3").value="";
    document.getElementById("Definitiva").value="";
}
function promedio(){
    var n1= document.getElementById("Nota1"). value; // asigna la nota 1 a la variable n1
    var n2= document.getElementById("Nota2"). value; // asigna la nota 2 a la variable n2
    var n3= document.getElementById("Nota3"). value; // asigna la nota 3 a la variable n3
    var Definitiva =(parseFloat(n1)+parseFloat(n2)+parseFloat(n3))/3;

    document.getElementById("Definitiva"). value=Definitiva.toFixed(2);
}
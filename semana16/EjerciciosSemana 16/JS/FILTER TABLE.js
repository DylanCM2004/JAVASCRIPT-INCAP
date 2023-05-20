function Buscar() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("datos");// NOMBRE INGRESADO DE LA PELICULA
    filter = input.value.toUpperCase();//CONVERTIR EN MAYUSCULA EL TEXTO 
    table = document.getElementById("tablaDatos");
    tr = table.getElementsByTagName("tr"); // ASIGNA TODAS LAS VARIABLES A UN ARRAY
    for (i = 0; i < tr.length; i++) { // RECOGE CADA UNA DE LAS FILAS DE LA TABLA
    td = tr[i].getElementsByTagName("td")[0]; //UBICA COMO COLUMNA 0 = NOMBRE DE LA PELI
    if (td) {
    txtValue = td.textContent || td.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) { //BUSCA EL NOMBRE DE LAS PELIS EN LA TABLA
    tr[i].style.display = ""; //SI EL INDEXof ES VERDADERO. MUESTRAS LA PELI
    } else {
    tr[i].style.display = "none"; //NO MUESTRA NADA PORQUE NO EXISTE EL ARCHIVO, COMO NETFLIX PERO SIN CONTENIDO 
    }
    }
    }
    }
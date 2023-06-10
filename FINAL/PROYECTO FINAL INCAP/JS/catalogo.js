// PRODUCTOS
const productos = [
    {
        id: "abrigo-01",
        titulo: "IOWA PRIME",
        imagen: "../img/WhatsApp Image 2023-04-10 at 7.30.15 PM (2).jpeg",
        categoria: {
            nombre: "Reconocimiento",
            id: "reconocimiento"
        },
        precio: 2500000
    },
    {
        id: "abrigo-02",
        titulo: "METOROiD",
        imagen: "../img/1366_2000.jpg",
        categoria: {
            nombre: "Movimiento",
            id: "movimiento"
        },
        precio: 4800000
    },
    {
        id: "abrigo-03",
        titulo: "MOVILUS ROAD",
        imagen: "../img/WhatsApp Image 2023-04-10 at 7.30.14 PM (1).jpeg",
        categoria: {
            nombre: "Reconocimiento",
            id: "reconocimiento"
        },
        precio: 420000
    },
    {
        id: "abrigo-04",
        titulo: "BIW ",
        imagen: "../img/WhatsApp Image 2023-04-10 at 7.30.14 PM (2).jpeg",
        categoria: {
            nombre: "Apoyo",
            id: "apoyo"
        },
        precio: 150000
    },
    {
        id: "MECH DOG",
        titulo: "MECH DOG",
        imagen: "../img/WhatsApp Image 2023-04-10 at 7.30.14 PM (3).jpeg",
        categoria: {
            nombre: "Apoyo",
            id: "apoyo"
        },
        precio: 450000
    },
    {
        id: "HEXA CRAB",
        titulo: "HEXA CRAB",
        imagen: "../img/WhatsApp Image 2023-04-10 at 7.30.15 PM (1).jpeg",
        categoria: {
            nombre: "Movimiento",
            id: "movimiento"
        },
        precio: 250000
    },
    {
        id: "INSECTE-MR2",
        titulo: "INSECTE-MR2",
        imagen: "../img/WhatsApp Image 2023-04-10 at 7.30.15 PM (3).jpeg",
        categoria: {
            nombre: "Movimiento",
            id: "movimiento"
        },
        precio: 25000000
    },
    {
        id: "ILUSTRIUS",
        titulo: "ILUSTRIUS",
        imagen: "../img/WhatsApp Image 2023-04-10 at 7.30.15 PM.jpeg",
        categoria: {
            nombre: "Reconocimiento",
            id: "reconocimiento"
        },
        precio: 389000
    },
    {
        id: "ARM LEXXUS",
        titulo: "ARM LEXXUS",
        imagen: "../img/WhatsApp Image 2023-04-11 at 10.54.58 PM (1).jpeg",
        categoria: {
            nombre: "Apoyo",
            id: "apoyo"
        },
        precio: 6000000
    },
    {
        id: "EXOESQUELETO",
        titulo: "EXOESQUELETO",
        imagen: "../img/WhatsApp Image 2023-04-11 at 10.54.58 PM.jpeg",
        categoria: {
            nombre: "Movimiento",
            id: "movimiento"
        },
        precio: 2500000
    },
    {
        id: "POLOBIUS D",
        titulo: "POLOBIUS A",
        imagen: "../img/WhatsApp Image 2023-06-08 at 11.16.24 PM (1).jpeg",
        categoria: {
            nombre: "Apoyo",
            id: "apoyo"
        },
        precio: 5000000
    },
    {
        id: "UNIXPACE",
        titulo: "UNIXPACE",
        imagen: "../img/WhatsApp Image 2023-06-08 at 11.16.24 PM.jpeg",
        categoria: {
            nombre: "Apoyo",
            id: "apoyo"
        },
        precio: 15000000
    },
    {
        id: "POLIBIUS A",
        titulo: "POLIBIUS A",
        imagen: "../img/WhatsApp Image 2023-06-08 at 11.16.25 PM (1).jpeg",
        categoria: {
            nombre: "Apoyo",
            id: "apoyo"
        },
        precio: 3500000
    },
    {
        id: "...",
        titulo: "XHL 2 ",
        imagen: "../img/WhatsApp Image 2023-06-08 at 11.16.25 PM (2).jpeg",
        categoria: {
            nombre: "Apoyo",
            id: "apoyo"
        },
        precio: 1800000
    },
    {
        id: "pantalon-02",
        titulo: "EVA 01",
        imagen: "../img/e1773ceeca74dc9098aa51710332ad05.jpg",//DD
        categoria: {
            nombre: "Movimiento",
            id: "movimiento"
        },
        precio: 999999999
    },
    {
        id: "pantalon-03",
        titulo: "DELOREAN TIME MACHINE",
        imagen: "../img/WhatsApp Image 2023-06-08 at 11.16.26 PM (1).jpeg",
        categoria: {
            nombre: "Reconocimiento",
            id: "reconocimiento"
        },
        precio: 150000000
    },
    {
        id: "pantalon-04",
        titulo: "PEGASUS BETA",
        imagen: "../img/WhatsApp Image 2023-06-08 at 11.16.26 PM.jpeg",
        categoria: {
            nombre: "Reconocimiento",
            id: "reconocimiento"
        },
        precio: 3820000
    },
    {
        id: "pantalon-05",
        titulo: "SV-001 METAL SLUG",
        imagen: "../img/WhatsApp Image 2023-06-08 at 11.28.55 PM.jpeg",
        categoria: {
            nombre: "Movimiento",
            id: "movimiento"
        },
        precio: 500000
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}
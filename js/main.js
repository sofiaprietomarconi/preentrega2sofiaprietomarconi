// declaracion de objetos 

const libros = [
    {
        nombre: "Este dolor no es mio",
        editorial: "Gaia Ediciones",
        autor: "Mark Wolynn",
        categoria: "Psicologia",
        paginas: 286,
        idioma: "Castellano",
        precio: 2300
    },
    {
        nombre: "Harry Potter y la Piedra Filosofal",
        editorial: "Salamandra",
        autor: "JK Rowling",
        categoria: "Ciencia ficcion",
        paginas: 288,
        idioma: "Catellano",
        precio: 2000

    },
    {
        nombre: "Harry Potter y la Camara Secreta",
        editorial: "Salamandra",
        autor: "JK Rowling",
        categoria: "Ciencia ficcion",
        paginas: 320,
        idioma: "Catellano",
        precio:4900

    },
    {
        nombre: "El poder de las palabras",
        editorial: "Debate",
        autor: "Mariano Sigman",
        categoria: "Psicologia",
        paginas: 352,
        idioma: "Castellano",
        precio: 5600
    },
    {
        nombre: "The war of the worlds",
        editorial: "Del fondo",
        autor: "HG Wells",
        categoria: "Ciencia ficcion",
        paginas: 218,
        idioma: "Ingles",
        precio: 7400

    },
    {
        nombre: "Confianza ciega",
        editorial: "Ediciones B",
        autor: "John Katzenbach",
        categoria: "Policial",
        paginas: 592,
        idioma: "Castellano",
        precio: 9100
    },
    {
        nombre: "La historia del loco",
        editorial: "Ediciones B",
        autor: "John Katzenbach",
        categoria: "Policial",
        paginas: 504,
        idioma: "Castellano",
        precio:8300
    },
    {
        nombre: "El psicoanalista",
        editorial: "Ediciones B",
        autor: "John Katzenbach",
        categoria: "Policial",
        paginas: 528,
        idioma: "Castellano",
        precio: 3700
    },

]

//muestra de elementos en los objetos 

function mostrarLibros (libros){
    
    libros.forEach ((libro) => {
        console.log ( libro.nombre + " - " + libro.editorial + " - " + libro.autor + " - " + libro.categoria + " - " + libro.paginas + " - " + libro.idioma + " - " + libro.precio )
      })
    
}

mostrarLibros (libros)

//filtrado de elementos por diferentes condiciones 

let autorElegido = prompt("Ingrese el autor que desee");

const autores = libros.filter((libro) => libro.autor === autorElegido);

if (autores.length > 0) {
    console.log("Libros encontrados del autor " + autorElegido + ":");
    mostrarLibros(autores);
} else {
    console.log("No se encontraron libros del autor " + autorElegido + ".");
}  

let categoriaElegida = prompt ("Ingrese la categoria que desea leer")

const categorias = libros.filter((libro) => libro.categoria.includes (categoriaElegida))

if (categorias.length > 0) {
    console.log("Libros encontrados de la categoria " + categoriaElegida + ":");
    mostrarLibros(categorias);
} else {
    console.log("No se encontraron libros de la categoria " + categoriaElegida + ".");
} 


let idiomaElegido = prompt ("Ingrese el idioma del libro")

const idiomas = libros.filter((libro) => libro.idioma.includes (idiomaElegido))

if (idiomas.length > 0) {
    console.log("Libros encontrados en el idioma " + idiomaElegido + ":");
    mostrarLibros(idiomas);
} else {
    console.log("No se encontraron libros en el idioma " + idiomaElegido + ".");
} 

let precioElegido = parseInt(prompt("¿Cuál es el precio máximo de libros que está buscando?"));

const precios = libros.filter((libro) => libro.precio <= precioElegido);

if (precios.length > 0) {
    console.log("Libros encontrados con precio igual o menor a " + precioElegido + ":");
    mostrarLibros(precios);
} else {
    console.log("No se encontraron libros con precio igual o menor a " + precioElegido + ".");
} 

let paginaElegida = parseInt(prompt("¿Cuál es el precio máximo de paginas que está buscando leer?"));

const pagina = libros.filter((libro) => libro.paginas <= paginaElegida);

if (pagina.length > 0) {
    console.log("Libros encontrados con numero de pagina igual o menor a  " + paginaElegida + ":");
    mostrarLibros(pagina);
} else {
    console.log("No se encontraron libros con numero de paginas igual o menor a  " + paginaElegida+ ".");
} 

//modificacion de array por aumento de precios 

const preciosActualizados = libros.map ((libro) => {
    return{
        nombre: libro.nombre,
        precio: libro.precio * 2 
    }
})

preciosActualizados.forEach ((libro) => console.log("El precio actualizado de" + libro.nombre + " es " + libro.precio)  )

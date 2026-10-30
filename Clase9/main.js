import { formatearPrecio, calcularDescuento, estaDisponible } from './utilidades.js';
//-------------------------- Ejercicio 1 --------------------------
console.log("Ejercicio 1");
const usuario = { nombre: "Ana", edad: 16, suscripcion: "gratuita" };

console.log("Consigna 1");
const edad = usuario.edad;
const acceso = edad >= 18 ? "Permitido" : "Denegado";
console.log(acceso); 

console.log("Consigna 2");
const plan = usuario.suscripcion ===  "premium" ? "Premium" : "Gratuita";
console.log(plan);

console.log("Consigna 3");
const saludo = usuario.nombre ? `hola ${usuario.nombre}` : "Hola, Invitado";
console.log(saludo);

//-------------------------- Ejercicio 2 --------------------------
console.log("Ejercicio 2");

const config = {
  tema: "oscuro",
  idioma: "",
  notificaciones: true,
  usuarioAdmin: false
};

console.log("Consigna 1");
const idioma = config.idioma || "español";
console.log(idioma);

console.log("Consigna 2");
const badge = config.usuarioAdmin && "Admin";
console.log(badge);

console.log("Consigna 3");
const noti = config.notificaciones && "Notificaciones activas";
console.log(noti);

//-------------------------- Ejercicio 3 --------------------------
console.log("Ejercicio 3");

const pelicula = {
  titulo: "Interstellar",
  director: "Christopher Nolan",
  año: 2014,
  duracion: 169,
  genero: "Ciencia ficción"
};

console.log("Consigna 1");
const { titulo, director, año } = pelicula;
console.log(titulo); 
console.log(director);
console.log(año);

console.log("Consigna 2");
const {duracion : duracionMinutos} = pelicula;
console.log(duracionMinutos);

console.log("Consigna 3");
const {calificacion = "Sin calificar"} = pelicula;
console.log(calificacion);

console.log("Consigna 4");
function mostrarPelicula({titulo, año, director}) {
  console.log(`${titulo}, (${año}), — Dir. ${director}`);
}
mostrarPelicula(pelicula);

//-------------------------- Ejercicio 4 --------------------------
console.log("Ejercicio 4");

const coordenadas = [40.7128, -74.0060, 10];
const colores = ["rojo", "verde", "azul", "amarillo"];

console.log("Consigna 1")
const [latitud, longitud, altitud] = coordenadas;
console.log(latitud, longitud, altitud);

console.log("Consigna 2");
const [primero, , ,cuarto] = colores;
console.log(primero);
console.log(cuarto);

console.log("Consigna 3");
const [colorR, ...resto] = colores;
console.log(colorR);
console.log(resto);

//-------------------------- Ejercicio 5 --------------------------
console.log("Ejercicio 5");
const base = { marca: "Samsung", modelo: "Galaxy S24", precio: 180000 };
const descuento = { precio: 150000, enOferta: true };

console.log("Consigna 1");
const copia = { ...base };
console.log(copia);

console.log("Consigna 2");
const oferta = {...base, enOferta: true, precio: 150000};
console.log(oferta);

//los dos dan el mismo resulatado, ns si es lo q vos esperabas ;(

console.log("Consigna 3");
const combina = {...base, ...descuento};
console.log(combina);

console.log("Consigna 4");
const carrito = ["auriculares", "teclado"]
const carritoActualizado = [...carrito, "mouse"] 
console.log(carritoActualizado);

//-------------------------- Ejercicio 6 --------------------------
console.log("Ejercicio 6");
console.log(formatearPrecio(120000));        // "$120.000"
console.log(calcularDescuento(10000, 20));   // 8000
console.log(estaDisponible(0));              // false
console.log(estaDisponible(5));              // true

//-------------------------- Ejercicio 7 --------------------------
console.log("Ejercicio 7 ------ INTEGRADOR");
const equipo = [
  { id: 1, nombre: "Ana",   rol: "desarrolladora", activo: true,  salario: 95000 },
  { id: 2, nombre: "Luis",  rol: "diseñador",       activo: false, salario: 80000 },
  { id: 3, nombre: "Carla", rol: "desarrolladora",  activo: true,  salario: 102000 },
  { id: 4, nombre: "Pedro", rol: "qa",              activo: true,  salario: 75000 },
  { id: 5, nombre: "Marta", rol: "desarrolladora",  activo: false, salario: 98000 },
];

console.log("Consigna 1");
function presentar({ nombre, rol }) {
  return `${nombre} - ${rol}`;
}
console.log(presentar(equipo[0]));

console.log("Consigna 2");
const estados = equipo.map((persona) =>{
    return {
        nombre: persona.nombre,
        estado: persona.activo ? "Activo" : "Inactivo"
    }
  });
console.log(estados);

console.log("Consigna 3");
const desarrolladorasConBono = equipo
.filter((persona) => 
     persona.rol === "desarrolladora" && persona.activo)
  .map((persona) => ({
    ...persona,
    salarioConBono: persona.salario + 10000
}));
console.log(desarrolladorasConBono);

console.log("Consigna 4");
function obtenerRol(persona) {
    return (persona.nombre === "Ana" && "ADMIN") ||
           (persona.activo && persona.rol.toUpperCase()) || "Inactivo";
}
console.log(obtenerRol(equipo[0])); 
console.log(obtenerRol(equipo[1]));
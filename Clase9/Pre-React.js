// Ejercicio 1
const usuario = { nombre: "Ana", edad: 16, suscripcion: "gratuita" };
const acceso = usuario.edad >= 18 ? "Permitido" : "Denegado";
const plan = usuario.suscripcion === "Premium" ? "Premium" : "Gratuito";
const saludo = usuario.nombre != "" ? `hola, ${usuario.nombre}` : "hola, invitado";

console.log(acceso) 
console.log(plan)
console.log(saludo)

// Ejercicio 2
const config = {
  tema: "oscuro",
  idioma: "",
  notificaciones: true,
  usuarioAdmin: false,
};

config.idioma = config.idioma || "español";
const badge = config.usuarioAdmin && "Admin";
console.log(config.notificaciones && "Notificaciones activas");

//Ejercicio 3
const pelicula = {
  titulo: "Interstellar",
  director: "Christopher Nolan",
  año: 2014,
  duracion: 169,
  genero: "Ciencia ficción",
};

const {
  titulo,
  director,
  año,
  duracion: duracionMinutos,
  calificacion = "Sin calificar",
} = pelicula;

function mostrarPelicula({ titulo, año, director }) {
  console.log(`${titulo} (${año}) — Dir. ${director}`);
}

mostrarPelicula(pelicula);

//Ejercicio 4 
const coordenadas = [40.7128, -74.0060, 10];
const colores = ["rojo", "verde", "azul", "amarillo"];

const [latitud, longitud, altitud] = coordenadas;
const [primero, , , ultimo] = colores;

const [primerColor, ...resto] = colores;

//Ejercicio 5 
const base = {
  marca: "Samsung",
  modelo: "Galaxy S24",
  precio: 180000
};

const descuento = {
  precio: 150000,
  enOferta: true
};

const copia = { ...base };

const oferta = {
  ...base,
  precio: 150000,
  enOferta: true
};

const combinado = {
  ...base,
  ...descuento
};

const carrito = ["auriculares", "teclado"];
const carritoActualizado = [...carrito, "mouse"];


//Ejercicio 7
const equipo = [
  { id: 1, nombre: "Ana",   rol: "desarrolladora", activo: true,  salario: 95000 },
  { id: 2, nombre: "Luis",  rol: "diseñador",       activo: false, salario: 80000 },
  { id: 3, nombre: "Carla", rol: "desarrolladora",  activo: true,  salario: 102000 },
  { id: 4, nombre: "Pedro", rol: "qa",              activo: true,  salario: 75000 },
  { id: 5, nombre: "Marta", rol: "desarrolladora",  activo: false, salario: 98000 },
];

const presentar = ({ nombre, rol }) => `${nombre} — ${rol}`;

const estados = equipo.map(({ nombre, activo }) => ({
  nombre,
  estado: activo ? "Activo" : "Inactivo"
}));

const desarrolladorasConBono = equipo
  .filter(persona => persona.rol === "desarrolladora" && persona.activo)
  .map(persona => ({
    ...persona,
    salarioConBono: persona.salario + 10000
  }));

function obtenerRol(persona) {
  return (
    (persona.nombre === "Ana" && "ADMIN") ||
    (persona.activo && persona.rol.toUpperCase()) ||
    "Inactivo"
  );
}



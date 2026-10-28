//-------------------------- Ejercicio 1 --------------------------
console.log("Ejercicio 1");
const usuario = { nombre: "Ana", edad: 16, suscripcion: "gratuita" };

console.log("1");
const edad = usuario.edad;
const acceso = edad >= 18 ? "Permitido" : "Denegado";
console.log(acceso); 

console.log("2");
const plan = usuario.suscripcion ===  "premium" ? "Premium" : "Gratuita";
console.log(plan);

console.log("3");
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

console.log("1");
const idioma = config.idioma || "español";
console.log(idioma);

console.log("2");
const badge = config.usuarioAdmin && "Admin";
console.log(badge);

console.log("3");
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

const { titulo, director, año } = pelicula;

console.log(titulo); 
console.log(director);
console.log(año);
// Ejercicio 1
const usuario = { nombre: "Ana", edad: 16, suscripcion: "gratuita" };
const acceso = usuario.edad >= 18 ? "Permitido" : "Denegado";
const plan = usuario.suscripcion === "Premium" ? "Premium" : "Gratuito";
const saludo = usuario.nombre != "" ? `hola, ${usuario.nombre}` : "hola, invitado";

console.log(acceso) 
console.log(plan)
console.log(saludo)

// Ejercicio 2

const usuario = { nombre: "Ana", edad: 16, suscripcion: "gratuita" };

console.log("1");
const edad = usuario;
const acceso = edad >= 18 ? "Permitido" : "Denegado";
console.log(acceso); 

console.log("2");
const plan = usuario;
const solicitud = suscripcion ===  "Premium" ? "Gratuita";
console.log(solicitud);
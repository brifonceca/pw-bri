const productos = [
  { id: 1, nombre: "Auriculares Bluetooth",  categoria: "Electrónica", precio: 15000, stock: 8,  activo: true  },
  { id: 2, nombre: "Teclado Mecánico",       categoria: "Electrónica", precio: 22000, stock: 0,  activo: true  },
  { id: 3, nombre: "Silla Ergonómica",       categoria: "Muebles",     precio: 85000, stock: 3,  activo: true  },
  { id: 4, nombre: "Lámpara de Escritorio",  categoria: "Muebles",     precio: 9500,  stock: 12, activo: false },
  { id: 5, nombre: "Mouse Inalámbrico",      categoria: "Electrónica", precio: 7800,  stock: 20, activo: true  },
  { id: 6, nombre: "Monitor 27\"",           categoria: "Electrónica", precio: 120000,stock: 2,  activo: true  },
  { id: 7, nombre: "Alfombra de Escritorio", categoria: "Muebles",     precio: 4200,  stock: 0,  activo: false },
  { id: 8, nombre: "Webcam HD",              categoria: "Electrónica", precio: 18000, stock: 5,  activo: true  },
];

//-------------------------------- Ejercicio 1 -------------------------------- 
console.log("Ejercicio 1");

const soloNombres = productos.map(function(producto) {
  return producto.nombre;
});

console.log(soloNombres);

//-------------------------------- Ejercicio 2 -------------------------------- 
console.log("Ejercicio 2");

const preciosConIVA = productos.map((producto) => {
  return {
    nombre: producto.nombre,
    precioFinal: Math.round(producto.precio * 1.21),
  };
});

console.log(preciosConIVA[0]);

//-------------------------------- Ejercicio 3 --------------------------------
console.log("Ejercicio 3");

const productosMuebles = productos
    .filter(function (producto) {
      return producto.categoria === "Muebles";
  })
    .map(function (producto) {
     return producto.nombre;
  })

  console.log(productosMuebles);

//-------------------------------- Ejercicio 4 --------------------------------
console.log("Ejercicio 4");

const buscarId = productos.find (function (producto) {
  return producto.id === 6;
})

console.log(buscarId);

//-------------------------------- Ejercicio 5 --------------------------------
console.log("Ejercicio 5");

const buscarProducto = productos.find (function (producto) {
  return producto.nombre.includes("Mouse");
})

if (buscarProducto) {
  console.log("Encontrado: ");
} else{
  console.log("No encontrado");
}

console.log(buscarProducto);

//-------------------------------- Ejercicio 6 --------------------------------
console.log ("Ejercicio 6");

console.log ("Pregunta 1");
const producto1 = productos.some (function (producto) {
  return producto.precio > 100000;
})

if (producto1){
  console.log ("Si hay al menos un producto que es mayor a 100.000");
} else {
  console.log ("No hay al menos un producto que es mayor a 100.000");
}

console.log(producto1);

console.log ("Pregunta 2");
const producto2 = productos.every (function (producto) {
  return producto.id != "";
})

if (producto2){
  console.log ("Si todas tienen una id definida");
} else {
  console.log ("No todas tienen una id definida");
}

console.log(producto2);

console.log ("Pregunta 3");
const producto3 = productos.some (function (producto) {
  return producto.activo == false;
})

if (producto3){
  console.log("Hay al menos un producto inactivo")
} else {
  console.log("No hay ningun producto inactivo")
}

console.log(producto3);

console.log ("Pregunta 4");
const producto4 = productos
  .filter (function (producto) {
    return producto.categoria = "Electrónica";
})
  .every (function (producto) {
    return producto.stock > 0;
  })

if (producto4 == false){
  console.log("Hay algun producto de Electrónica que no tiene stock mayor a 0");
} else {
  console.log("Todos los productos de Electrónica tienen stock mayor a 0")
}

console.log(producto4);

//-------------------------------- Ejercicio 7 --------------------------------
console.log ("Ejercicio 7");

const valorInventario = productos
  .filter (function (producto) {
    return producto.stock > 0;
})
  .reduce (function (acumulador, producto) {
    return acumulador + (producto.precio * producto.stock);
  }, 0);

  console.log(valorInventario);

//-------------------------------- Ejercicio 8 --------------------------------
console.log ("Ejercicio 8");

const productoContiene = productos
  .filter (function (producto) {
    return producto.activo === true;
  })
  .filter (function (producto) {
    return producto.stock > 0;
  })
  .filter (function (producto) {
    return producto.precio < 20000;
  })

console.log(productoContiene);

//-------------------------------- Ejercicio 9 --------------------------------
console.log("Ejercicio 9");

const productosPorCategoria = productos.reduce(function(acumulador, producto){
  
  if(producto.activo){
    acumulador[producto.categoria]=(acumulador[producto.categoria] || 0)+1;
  } 
  return acumulador;
}, {});


//-------------------------------- Ejercicio 10 --------------------------------
console.log("Ejercicio 10");

function resumirInventario(productos) {
  return productos.reduce(function(acumulador, producto) {
    acumulador.total++;

    if (producto.activo === true) {
      acumulador.activos++;
    }

    if (producto.stock === 0) {
      acumulador.sinStock++;
    }

    acumulador.valorTotal += (producto.precio * producto.stock);

    const cat = producto.categoria;
    if (acumulador.categorias[cat]) {
      acumulador.categorias[cat]++;
    } else {
      acumulador.categorias[cat] = 1;
    }

    return acumulador;
  }, {
    total: 0,
    activos: 0,
    sinStock: 0,
    valorTotal: 0,
    categorias: {}
  });
}

console.log(resumirInventario(productos));

console.log(productosPorCategoria);

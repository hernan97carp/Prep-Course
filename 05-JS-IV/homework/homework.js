// No cambies los nombres de las funciones.

const { default: simpleGit } = require("simple-git");

function crearGato (nombre, edad) {
  var objeto = {
   nombre: nombre,
   edad: edad,
   meow: function(){
    return 'Meow!';
   }

  }
   return objeto;
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
}

function agregarPropiedad (objeto, property) {
    objeto[property] = null;
    return objeto;


  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
}

function invocarMetodo (objeto, metodo) {
    objeto[metodo](); 
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
}

function multiplicarNumeroDesconocidoPorCinco (objetoMisterioso) {
   var resultado =  objetoMisterioso.numeroMisterioso * 5 ;
   return resultado;
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:

}

function eliminarPropiedad (objeto, unaPropiedad) {
  delete objeto[unaPropiedad];
  return objeto;
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
}

function nuevoUsuario (nombre, email, password) {
  var objeto = {
    nombre: nombre,
    email: email,
    password: password,
  }
  return objeto;
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:

}

function tieneEmail (usuario) {
if (usuario['email']){
  return true;
}
return false;
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
}

function tienePropiedad (objeto, propiedad) {
  if (objeto[propiedad]){
    return true;
  }
  return false;

  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
}

function verificarPassword (usuario, password) {
  if( usuario['password'] === password){
    return true;
  }
  return false;
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // Tu código:
}

function actualizarPassword (usuario, nuevaPassword) {
  usuario.password = nuevaPassword;
  return usuario;
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:
}

function agregarAmigo (usuario, nuevoAmigo) {
  usuario.amigos.push(nuevoAmigo);
  return usuario;
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // Tu código:
}

function pasarUsuarioAPremium (usuarios) {
 for(var i = 0 ; i < usuarios.length; i++){
     usuarios[i].esPremium = true;
 }
 return usuarios;
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
}

function sumarLikesDeUsuario (usuario) {
  var suma = 0;
  for (var i = 0; i < usuario.posts.length; i++){
    suma = suma + usuario.posts[i].likes; 
  }
 return suma;
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
}

function agregarMetodoCalculoDescuento (producto) {
   producto.calcularPrecioDescuento = function(){
    return this.precio - (this.precio * this.porcentajeDeDescuento)
   };
   return producto;

  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
}

// Do not change any of the function names

function mayuscula(nombre) {
  return nombre[0].toUpperCase() + nombre.slice(1);


  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
}

function invocarCallback(cb) {
   cb();
  // Invoca al callback `cb`
  //Tu código:
}

function operacionMatematica(n1, n2, cb) {
    return cb(n1,n2);
  
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
}

function sumarArray(numeros, cb) {
  // var numeros = [1,2,3,4,5]
  // var suma = 0;
  // for(var i = 0; i < numeros.length; i++) {
  //   suma = suma + numeros[i];
  // }
  // cb(suma);

  var suma = numeros.reduce(function(acc, cur)
  {
   return acc + cur ;},0);
   cb(suma);

  
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
}

function forEach(array, cb) {
  for(var i= 0; i < array.length;i++){
    cb(array[i])
  }

  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
}

function map(array, cb) {
  nuevoArray= array.map(function(acc){
   return cb(acc);
  });
  return nuevoArray;
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
}

function filter(array) {
  var nuevaArray= [];
  for(let i = 0; i < array.length;i++){
   if (array[i][0]=== "a"){
     nuevaArray.push(array[i])
   }
  }
return nuevaArray;
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};

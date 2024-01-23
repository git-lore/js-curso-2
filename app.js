// Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
const horaDesafio = document.querySelector(`h1`);
horaDesafio.innerHTML = "Hora del Desafío";

// Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
let botonConsole = () => {
  console.log("El botón fue clicado");
  return;
};

// Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
let botonPrompt = () => {
  let ciudad = prompt("Escriba el nombre de una ciudad de Brasil");
  alert(`"Estuve en ${ciudad} y me acordé de ti".`);
  return;
};

// Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
let botonAlert = () => {
  alert("Yo amo JS");
  return;
};

// Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
let botonSuma = () => {
  let numero1 = parseInt(prompt("Ingresar un numero."));
  let numero2 = parseInt(prompt("Ingresar un segundo numero."));
  let resultado = numero1 + numero2;
  return alert(`"La suma de ${numero1} con ${numero2} es ${resultado}".`);
};

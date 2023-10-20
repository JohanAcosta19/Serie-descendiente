function secuenciaDescendente(numero) {
    if (numero >= 0) {
        console.log(numero);
        secuenciaDescendente(numero - 1);
    }
  else {
      return 0;
  }
}
const numeroEntero = parseInt(prompt("Introduce un número ENTERO:"));
secuenciaDescendente(numeroEntero);

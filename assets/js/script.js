/* 
 ejecutamos primero el menu dentro de un for para que se repita hasta que el usuario
 ingrese la opcion para salir
  */

var contadorPares = 0;
var contadorImpares = 0;
let continuar = true;
var menu = 0;
var factorial = 1;

// variables de conteo de uso

var contadorNumeroPar = 0;
var contadorFactorial = 0;
var contadorValidacion = 0;
var contadorMultiplicar = 0;
var contadorNumerosPrimos = 0;
var contadorFibonacci = 0;
var contadorTemperatura = 0;
var contadorPotencia = 0;

while (continuar) {
  menu = 0;

  console.log("Listado de ejercicios:");
  console.log("1. Contador de Números Pares e Impares");
  console.log("2. Calculadora de Factorial");
  console.log("3. Validación de Contraseña");
  console.log("4. Generador de Tablas de Multiplicar");
  console.log("5. Suma de Números Primos");
  console.log("6. Secuencia de Fibonacci");
  console.log("7. Convertidor de Temperatura");
  console.log("8. Calculadora de Potencia");
  console.log("9. Cerrar");

  const opcion = Number(prompt("Seleccione un ejercicio (1-9):"));

  switch (opcion) {
    case 1:
      contadorPares = 0; // Reiniciar contadorPares
      contadorImpares = 0; // Reiniciar contadorImpares
      menu = 0; // reiniciar contador menu

      while (menu != 2) {
        menu = Number(
          prompt("Desea continuar con el programa\n 1. Sí\n 2. No")
        );

        if (menu === 1) {
          alert(
            "el programa  solicita al usuario un numero para saber la cantidad de numeros que quiere mostrar y saber cuales son par y cuales son inpar"
          );
          contadorNumeroPar++;
          let numeroPares = Number(prompt("Ingrese la cantidad de números: "));

          for (let i = 1; i <= numeroPares; i++) {
            console.log(i);
            if (i % 2 == 0) {
              contadorPares++;
            } else {
              contadorImpares++;
            }
          }
          console.log(
            "La cantidad de números pares son: " +
              contadorPares +
              "\n y los números impares son: " +
              contadorImpares
          );
        } else if (menu !== 2) {
          console.log("Por favor, ingrese una opción válida (1 o 2).");
        }
      }
      break;
    case 2:
      while (menu != 2) {
        menu = Number(
          prompt("Desea continuar con el programa\n 1. Sí\n 2. No")
        );

        if (menu === 1) {
          alert(
            "el programa lo que hace es solicitar al usuario un numero para asi mostrar su factorial"
          );
          contadorFactorial++;
          let numeroFactorial = Number(
            prompt("Ingrese el número para calcular el factorial: ")
          );

          if (numeroFactorial < 0) {
            console.log(
              "El factorial no está definido para números negativos."
            );
          } else {
            factorial = 1;
            for (let i = 1; i <= numeroFactorial; i++) {
              factorial *= i;
            }
            console.log(
              "El factorial de " + numeroFactorial + " es igual a " + factorial
            );
          }
        } else if (menu !== 2) {
          console.log("Por favor, ingrese una opción válida (1 o 2).");
        }
      }
      break;
    case 3:
      while (menu != 2) {
        menu = Number(
          prompt("Desea continuar con el programa\n 1. Sí\n 2. No")
        );

        if (menu === 1) {
          alert(
            "lo que hace este programa es una simple validacion de un contraseña (secreto123)"
          );
          contadorValidacion++;
          var contraseña = prompt("Ingrese la contraseña");

          if (contraseña === "secreto123") {
            console.log("Usted accedió correctamente.");
          } else {
            console.log("Acceso denegado.");
          }
        } else if (menu !== 2) {
          console.log("Por favor, ingrese una opción válida (1 o 2).");
        }
      }
      break;
    case 4:
      while (menu != 2) {
        menu = Number(
          prompt("Desea continuar con el programa\n 1. Sí\n 2. No")
        );

        if (menu === 1) {
          alert(
            "lo que hace el programa es solicitar al usuario un numero para asi mostrar su tabla de multiplicar hasta el 10"
          );
          contadorMultiplicar++;
          let numeroTabla = prompt("ingrese un numero");
          for (var i = 0; i < numeroTabla; i++) {
            console.log(numeroTabla + " * " + i + " = " + numeroTabla * i);
          }
        } else if (menu !== 2) {
          console.log("Por favor, ingrese una opción válida (1 o 2).");
        }
      }
      break;
    case 5:
      while (menu != 2) {
        menu = Number(
          prompt("Desea continuar con el programa\n 1. Sí\n 2. No")
        );

        if (menu === 1) {
          alert(
            "lo que hace el programa es solicitar al usuario la cantidad de numeros primos que quiere sumar"
          );
          contadorNumerosPrimos++;
          let N = Number(
            prompt("Ingrese la cantidad de números primos que desea sumar:")
          );
          let suma = 0;
          let numero = 2;
          let primosEncontrados = 0;

          while (primosEncontrados < N) {
            let esPrimo = true;

            for (let i = 2; i <= Math.sqrt(numero); i++) {
              if (numero % i === 0) {
                esPrimo = false;
                break;
              }
            }

            if (esPrimo) {
              suma += numero;
              primosEncontrados++;
            }

            numero++;
          }

          console.log(
            "La suma de los primeros " + N + " números primos es :" + suma
          );
        } else if (menu !== 2) {
          console.log("Por favor, ingrese una opción válida (1 o 2).");
        }
      }

      break;
    case 6:
      while (menu != 2) {
        menu = Number(
          prompt("Desea continuar con el programa\n 1. Sí\n 2. No")
        );

        if (menu === 1) {
          alert(
            "lo que hace el programa es solicitar al usuario un numero para asi mostrar los caracteres en la  secuencia de fibon"
          );
          contadorFibonacci++;
          let cantidadFibonacci = Number(
            prompt("ingrese la cantidad de caracteres en fibonacci")
          );
          let sum = 0;
          let n1 = 0;
          let n2 = 1;

          for (let i = 0; i < cantidadFibonacci; i++) {
            sum = n1 + n2;
            n1 = n2;
            n2 = sum;
            console.log(sum);
          }
        } else if (menu !== 2) {
          console.log("Por favor, ingrese una opción válida (1 o 2).");
        }
      }
      break;
    case 7:
      while (menu != 2) {
        menu = Number(
          prompt("Desea continuar con el programa\n 1. Sí\n 2. No")
        );

        if (menu === 1) {
          alert(
            "lo que hace el programa es preguntar que tipo de cambio de temperatura quiere hacer y luego hace el cambio de temperatura"
          );
          contadorTemperatura++;

          // Solicitar al usuario la dirección de la conversión
          let direccion = prompt(
            "Seleccione la dirección de la conversión:\n1. De Celsius a Fahrenheit\n2. De Fahrenheit a Celsius"
          );

          if (direccion === "1") {
            // Conversión de Celsius a Fahrenheit
            let celsius = parseFloat(
              prompt("Ingrese la temperatura en grados Celsius:")
            );
            let fahrenheit = (celsius * 9) / 5 + 32;
            console.log(
              "La temperatura en Fahrenheit es: " + fahrenheit + " °F"
            );
          } else if (direccion === "2") {
            // Conversión de Fahrenheit a Celsius
            let fahrenheit = parseFloat(
              prompt("Ingrese la temperatura en grados Fahrenheit:")
            );
            let celsius = ((fahrenheit - 32) * 5) / 9;
            console.log("La temperatura en Celsius es: " + celsius + " °C");
          } else {
            console.log(
              "Opción no válida. Por favor, seleccione una dirección válida (1 o 2)."
            );
          }
        } else if (menu !== 2) {
          console.log("Por favor, ingrese una opción válida (1 o 2).");
        }
      }
      break;
    case 8:
      while (menu != 2) {
        menu = Number(
          prompt("Desea continuar con el programa\n 1. Sí\n 2. No")
        );

        if (menu === 1) {
          alert(
            "lo que hace el program es solicitar al usuario una base y un exponente para asi calcular su potencia"
          );
          contadorPotencia++;
          // Solicitar al usuario la base y la potencia
          let base = Number(prompt("Ingrese la base:"));
          let exponente = Number(prompt("Ingrese el exponente (potencia):"));

          let resultado = 1;

          // Calcular la potencia utilizando un bucle
          for (let i = 0; i < exponente; i++) {
            resultado *= base;
          }

          console.log(
            base + " elevado a la " + exponente + "  es igual a: " + resultado
          );
        } else if (menu !== 2) {
          console.log("Por favor, ingrese una opción válida (1 o 2).");
        }
      }

      break;
    case 9:
      continuar = false; // Termina la ejecución del programa


     

      var arregloContadores = [
        contadorNumeroPar,
        contadorFactorial,
        contadorValidacion,
        contadorMultiplicar,
        contadorNumerosPrimos,
        contadorFibonacci,
        contadorTemperatura,
        contadorPotencia,
      ];

      for(i=0;i<arregloContadores.length;i++){
        console.log('el contador numero #'+i +' se uso '+arregloContadores[i]+' veces en total');

      }

      var mayorContador = Math.max(...arregloContadores);
      var menorContador = Math.min(...arregloContadores);

      var maximosIndices = [];
      var minimosIndices = [];

      for (var i = 0; i < arregloContadores.length; i++) {
        if (arregloContadores[i] === mayorContador) {
          maximosIndices[maximosIndices.length] = i;
        } else if (arregloContadores[i] === menorContador) {
          minimosIndices[minimosIndices.length] = i;
        }
      }

      console.log("el contador con mayor se utilizo:", mayorContador+' veces');
      console.log("Contadores con máximo uso:");
      for (var i = 0; i < maximosIndices.length; i++) {
        console.log(arregloContadores[maximosIndices[i]]);
      }

      console.log("el contador minimo se utilizo:", menorContador);
      console.log("Contadores con mínimo uso:");
      for (var i = 0; i < minimosIndices.length; i++) {
        console.log(arregloContadores[minimosIndices[i]]);
      }

      console.log("Gracias por usar el programa. ¡Hasta luego!");

      break;
    default:
      console.log("Opción no válida. Por favor, seleccione una opción válida.");
      break;
  }
}

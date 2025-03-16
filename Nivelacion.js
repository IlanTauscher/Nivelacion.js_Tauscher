//Ejercicio 1: 
// let nombre = prompt("Ingrese su nombre");
// Console.log("Hola", nombre);

// Ejercicio 2:
// let num1 = parseInt(prompt("Ingrese un numero"));
// let num2 = parseInt(prompt("Ingrese otro numero"));
// console.log("La suma es:" , num1 + num2);
// console.log("La resta es:" , num1 - num2);
// console.log("La multiplicacion es:" , num1 * num2);
// console.log("La divicion es:" , num1 / num2);

// Ejercicio 3:
// let num1 = parseInt(prompt("Ingrese un numero"));
// if(num1 % 2 == 0)
// {
//     console.log("Su numero es par");
// }
// else{
//     console.log("Su numero es impar");
// }

// Ejercicio 4: 
// let palabra = document.querySelector(".palabra")
// let btn = document.querySelector(".btn")

// btn.addEventListener("click", () => {
// console.log(palabra.value.length)
// });

// Ejercico 5:
// let btn = document.querySelector(".btn")

// btn.addEventListener("click", () => {
//     let frase = document.querySelector(".frase").value
//     let num = document.querySelector(".num").value

//     for(i = 0; i < num; i++){
//         console.log(frase)
//     }
// });

// Ejercicio 6:
// let btn = document.querySelector(".btn")

// btn.addEventListener("click", () => {
// let num = document.querySelector(".num").value
// for(i = 0; i <= 10; i++){
//     console.log(num * i)
// }
// })

// Ejercicio 7:
// let btn = document.querySelector(".btn");
// let random;

// random = Math.floor((Math.random() * 10 )+ 1);

// btn.addEventListener("click", () => {
// let num = document.querySelector(".num").value
//     if(num == random){
//         console.log("Adivinaste!")
//     }else if(num < random){
//         console.log("El numero es mayor!")
//     }else if(num > random){
//         console.log("El numero es menor!")
//     }
// })

// Ejercicio 8:
// let btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
// let pal = document.querySelector(".pal").value
//     function contarVocales(pal) {
//         let contador = 0;
//         let vocales = "aeiouAEIOU";

//         for (let letra of pal) {
//             if (vocales.includes(letra)) {
//                 contador++;
//             }
//         }

//         return contador;
//     }
//     let cantidadVocales = contarVocales(pal);

//     console.log(`La palabra "${pal}" tiene ${cantidadVocales} vocales.`);
// })

// Ejercicio 9:

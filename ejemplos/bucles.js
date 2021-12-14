// DO..WHILE

let i = 1;
do {
  console.log(`The value of i is ${i}`);
  i++;
} while (i < 10);
console.log("---------------------------")

// BUCLE FOR
let myArray = ["spanish", "english", "french", "python", "Javascript", "polish", "greek"];

// FORMA CANÓNICA: 3 partes: 1º Contador ; 2º Condición ; 3º Aumento del contador

for( let j = 0 ; j < myArray.length ; j++ ) {
    let language = myArray[j];
    console.log(`Language in position ${j} is ${language}`)
}
console.log("---------------------------")
// FOR OF
// for ( una variable temporal que es el valor actual )
for (let language of myArray) {
    console.log(`Language is ${language}`)
}

// FOR IN
for (let i in myArray) {
    let language = myArray[i]
    console.log(`Language in position ${i} 
    is ${language}`)
}
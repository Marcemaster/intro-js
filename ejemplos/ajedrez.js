/*
console.log('B N B N B N B N')
console.log('N B N B N B N B')
console.log('B N B N B N B N')
console.log('N B N B N B N B')
console.log('B N B N B N B N')
console.log('N B N B N B N B')
console.log('B N B N B N B N')
console.log('N B N B N B N B')
*/


const filaPar = 'B N B N B N B N';
const filaImpar = 'N B N B N B N B';

for(let i = 0; i < 8; i++) {
    if (i % 2 === 0) {
        console.log(filaPar);
    } else {
        console.log(filaImpar);
    }
}

console.log("--------------------")
console.log("--------------------")
console.log("--------------------")

const totalFilas = 8

for(let i = 0; i < totalFilas; i++) {
    let fila = [];
    for(let j = 0; j < 8; j++) {
        if((i+j) % 2 === 0 ) {
            fila.push("B")
        } else {
            fila.push("N")
        }
    }
    console.log(fila.join(' '))
}


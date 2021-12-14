function funcion1(nombre, empleo) {
    return `${nombre} es ${empleo} `
}

let resultado = funcion1("Marce", "Community");
console.log(resultado)


//2 ASIGNANDO LA FUNCION A UNA VARIABLE 

const funcion2 = function(conocimientos) {
    switch(conocimientos.lenght) {
        case 0:
            return "No tiene ni idea";
            break;
        case 1:
            return "Sabe algo";
            break;
        case 2:
            return "F**** Master";
            break;
    }
}

resultado = funcion2(1);
console.log(resultado);

// Arrow functions

const funcion3 = (nombre, accion = "caminar") => {
    return `${nombre} sabe ${accion}`
}

resultado = funcion3("Hobbit");
console.log(resultado);
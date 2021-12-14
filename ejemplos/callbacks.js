const atacar = (personaje, funcionAtaque) => {
    let ataque = funcionAtaque(personaje);
    console.log(`${personaje.name} ataca con ${ataque.weapon}: ${ataque.speed} velocidad, causa ${ataque.damage} de daño`)
}


const legolas = {
    name: "legolas",
    speed: 12,
    damage: 4
}
const gimli = {
    name: "gimli",
    speed: 4,
    damage: 12
}
const aragorn = {
    name: "aragorn",
    speed: 8,
    damage: 8
}

const attacWithSword = (personaje) => {
    const character = {...personaje};
    return {
        weapon: 'sword',
        speed: personaje.speed + 4,
        damage: personaje.damage + 4,
    }
}
const attacWithHammer = (personaje) => {
    const character = {...personaje};
    return {
        weapon: 'hammer',
        speed: personaje.speed - 1,
        damage: personaje.damage + 9,
    }
}
const attacWithBow = (personaje) => {
    const character = {...personaje};
    return {
        weapon: 'bow',
        speed: personaje.speed + 8,
        damage: personaje.damage + 2,
    }
}

atacar(legolas, attacWithBow);

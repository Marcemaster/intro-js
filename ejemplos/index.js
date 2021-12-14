// DONE : Mostrar los equipos inscritos por pantalla.

const teams = [
    "Hoffenheim",
    "Lyon",
    "Chelsea",
    "Barça",
    "Madrid",
    "Atletico",
    "Rayo Vallecano",
    "Estepona",
];

console.log(teams);

// DONE: Crear la planificación de jornadas y partidos de cada jornada.

class League {
    // Teams
    // players
    // matchDays
    // match
    // results
    // scores

    constructor(name, teams, rounds = 1) {
        this.name = name;
        this.teams = teams;
        this.rounds = rounds;
        //Planificación
        this.matchDaySchedule = [];
        this.scores = [];
        this.matches = [];
    }

    showTeams() {
        console.log(this.teams);
    }
}

let anyLeague = new League("any League", teams);

console.log(anyLeague);
anyLeague.showTeams();

let anotherLeague = new League("another League", ["a", "b", "c"]);
console.log(anotherLeague.name);
anotherLeague.showTeams();

class FootballLeague extends League {
    constructor(name, teams, rounds = 1, pointsPerWin = 3, pointsPerDraw = 1 , pointsPerLose = 0) {
        super(name, teams, rounds);
        this.pointsPerWin = pointsPerWin;
        this.pointsPerDraw = pointsPerDraw;
        this.pointsPerLose = pointsPerLose;
    }
}

let aFootballLeague = new FootballLeague("Foot", ["zz", "xx", "yy"], 1, 4, 2, -1);
console.log(aFootballLeague.name);
aFootballLeague.showTeams();

// TODO : Mostrarla por pantalla.
// TODO : Jugar lo partidos de todas las jornadas. Una vez terminada cada jornada, se deberá mostrar cómo queda la clasificación de la misma.
// TODO : Una vez terminada la liga, se mostrarán estádísticas de número de goles totales y total de puntos ganados.

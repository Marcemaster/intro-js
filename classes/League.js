export default class League {
    // name
    // teams
    // rounds
    // players
    // matchDays
    // matches
    // results
    // scores
    constructor(name, teams, config = {}) {
        this.name = name;
    
        this.setupTeams(teams);
        this.setup(config);
        // planificación
        this.matchDaySchedule = [];
        this.scores = [];
        this.matches = [];
    }

    setup(config = {}) {
        const defaultConfig = {rounds: 1};
        this.config = Object.assign(defaultConfig, config);
    }

    setupTeams(teams) {
        this.teams = [];
        for(let teamName of teams) {
            let teamObj = this.customizeTeam(teamName);
            // añadimos el objeto descriptivo del equipo al array de equipos
            this.teams.push(teamObj)
        }
    }

    customizeTeam(teamName) {
        return {
            name: teamName,
            matchesWon: 0,
            matchesDraw: 0,
            matchesLost: 0
        }
    }
    
    // DONE: Mostrar los equipos inscritos por pantalla.
    showTeams() {
        console.log(this.teams)
    }
}
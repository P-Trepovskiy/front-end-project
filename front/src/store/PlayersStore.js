import {makeAutoObservable} from "mobx";

export default class PlayersStore {
    constructor() {
        this._leagues = []
        this._players = []
        this._selectedLeague = {}
        makeAutoObservable(this)
    }

    setLeagues(leagues) {
        this._leagues = leagues
    }

    setPlayers(players) {
        this._players = players
    }

    setSelectedLeague(league) {
        this._selectedLeague = league
    }

    get leagues() {
        return this._leagues
    }

    get players() {
        return this._players
    }

    get selectedLeague() {
        return this._selectedLeague
    }
}
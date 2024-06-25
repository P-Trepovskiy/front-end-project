import {$authHost, $host} from "./index";

export const createLeague = async (league) => {
    const {data} = await $authHost.post('api/league', league)
    return data
}

export const fetchLeagues = async () => {
    const {data} = await $host.get('api/league');
    return data;
}

export const createPlayer = async (player) => {
    console.log(player);
    const {data} = await $host.post('api/player', player)
    return data
}

export const fetchPlayers = async (leagueId) => {
    const {data} = await $host.get('api/player', {params: { leagueId }})
    return data
}

export const fetchOnePlayer = async (id) => {
    const {data} = await $host.get('api/player/' + id)
    return data
}
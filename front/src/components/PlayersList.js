import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import PlayerItem from "./PlayerItem";

const PlayersList = observer((props) => {
    const {player} = useContext(Context)

    console.log(player);
    console.log(props.selectedLeagueName);
    let players;
    if (props.selectedLeagueName) {
        players = player.players.filter(p => p.league === props.selectedLeagueName)
    }
    else {
        players = player.players;
    }
    // console.log(props);
    // console.log(props.selectedLeague);
    // console.log(props.selectedLeague.id);

    // const players = (!props && !props.selectedLeague) ? player.players : player.players.filter(p => p.selectedLeague.id === props.selectedLeague.id);

    return (
        <Row className="d-flex">
            {/* {props.selectedLeague && player && player.players && player.players.filter(player.selectedLeague.id === props.selectedLeague.id).map(player =>
                    <PlayerItem key={player.id} player={player}/>
            )} */}

            {players.map(player =>
                    <PlayerItem key={player.id} player={player}/>
            )}

            {/* {player && players.map(player =>
                    <PlayerItem key={player.id} player={player}/>
            )} */}
            
        </Row>
    );
});

export default PlayersList;
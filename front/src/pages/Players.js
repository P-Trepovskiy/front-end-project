import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {Col, Container, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import LeagueBar from "../components/LeagueBar";
import {fetchLeagues, fetchPlayers} from "../http/playerApi";
import PlayersList from "../components/PlayersList";

const Players = observer(() => {
    const {player} = useContext(Context)

    useEffect(() => {
        fetchLeagues().then(data => player.setLeagues(data))
        fetchPlayers(null).then(data => {
            player.setPlayers(data)
        })
    }, [])

    useEffect(() => {
        console.log(player?.selectedLeague);
        if (player?.selectedLeague) {
            fetchPlayers(player.selectedLeague.id).then(data => {
                player.setPlayers(data);
            });
        }
    }, [player?.selectedLeague]);

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <LeagueBar/>
                </Col>
                <Col md={9}>
                    <PlayersList selectedLeagueName={player?.selectedLeague.name}/>
                </Col>
            </Row>
        </Container>
    );
});

export default Players;
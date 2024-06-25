import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreatePlayer from "../components/modals/CreatePlayer";
import CreateLeague from "../components/modals/CreateLeague";

const Admin = () => {
    const [leagueVisible, setLeagueVisible] = useState(false)
    const [playerVisible, setPlayerVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                style={{backgroundColor: "white"}}
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setLeagueVisible(true)}
            >
                Додати лігу
            </Button>
            <Button
                style={{backgroundColor: "white"}}
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setPlayerVisible(true)}
            >
                Додати гравця
            </Button>
            <CreatePlayer show={playerVisible} onHide={() => setPlayerVisible(false)}/>
            <CreateLeague show={leagueVisible} onHide={() => setLeagueVisible(false)}/>
        </Container>
    );
};

export default Admin;
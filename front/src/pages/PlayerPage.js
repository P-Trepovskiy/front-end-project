import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
import {useParams} from 'react-router-dom'
import {fetchOnePlayer} from "../http/playerApi";

const PlayerPage = () => {
    const [player, setPlayer] = useState({info: []})
    const {id} = useParams()
    console.log(useParams());
    useEffect(() => {
        fetchOnePlayer(id).then(data => {
            setPlayer(data)
            console.log(data);
        })
    }, [])

    return (
        <Container className="mt-3">

            <Row style={{display: 'flex', justifyContent: 'center', marginTop: '10%'}}>
                <Col md={4} style={{display: 'flex', justifyContent: 'center'}}>
                    <Image style={{objectFit: 'cover'}} width={150} height={150} src={"data:image/png;base64,"+localStorage.getItem(player.league+"-"+player.name)}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center" style={{ background: "white", padding: "20px", borderRadius: "30px"}}>
                        <h2>Ім'я: {player.name}</h2>
                        <h3>Ліга: {player.league}</h3>
                        <h4>Вік гравця: {player.age}</h4>
                        <h4>Висота гравця: {player.height}cm</h4>
                        <h4>Позиція: {player.position}</h4>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default PlayerPage;
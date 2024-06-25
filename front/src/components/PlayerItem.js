import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from '../assets/star.png'
import {useNavigate } from "react-router-dom"
import {PLAYER_ROUTE} from "../utils/consts";

const PlayerItem = ({player}) => {
    const history = useNavigate()
    return (
        <Col md={3} className={"mt-3"} onClick={() => history(PLAYER_ROUTE + '/' + player.id)}>
            <Card style={{width: 150, cursor: 'pointer', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}} border={"light"}>
                <Image width={150} height={150} style={{objectFit: 'cover'}} src={"data:image/png;base64,"+localStorage.getItem(player.league+"-"+player.name)}/>
                <div>{player.name}</div>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>{player.league}</div>
                </div>
                
            </Card>
        </Col>
    );
};

export default PlayerItem;
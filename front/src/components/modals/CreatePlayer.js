import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
import {Context} from "../../index";
import {createPlayer, fetchLeagues} from "../../http/playerApi";
import {observer} from "mobx-react-lite";

const CreatePlayer = observer(({show, onHide}) => {
    const {player} = useContext(Context)
    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [age, setAge] = useState(0)
    const [height, setHeight] = useState(0)
    const [avatar, setAvatar] = useState(null)

    useEffect(() => {
        fetchLeagues().then(data => player.setLeagues(data))
    }, [])

    const selectFile = event => {
        // setFile(e.target.files[0])

        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const base64String = e.target.result.split(',')[1]; // Extract base64 string after the comma
                console.log('Base64 String:', base64String);
                setAvatar(base64String)
            };
            reader.onerror = function(error) {
                console.error('Error: ', error);
            };
            reader.readAsDataURL(file);
        }
    }

    const addPlayer = () => {

        // console.log(file);
        // console.log(player.selectedLeague);

        localStorage.setItem(player.selectedLeague.name+"-"+name, avatar)

        createPlayer({
            name: name,
            age: age,
            height: height,
            position: position,
            league_id: player.selectedLeague.id
        }).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add player
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{player.selectedLeague.name || "Choose league"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {player.leagues.map(league =>
                                <Dropdown.Item
                                    onClick={() => player.setSelectedLeague(league)}
                                    key={league.id}
                                >
                                    {league.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Input player name"
                    />
                    <Form.Control
                        value={position}
                        onChange={e => setPosition(e.target.value)}
                        className="mt-3"
                        placeholder="Input player position"
                    />
                    <Form.Control
                        value={age}
                        onChange={e => setAge(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Input player age"
                        type="number"
                    />
                    <Form.Control
                        value={height}
                        onChange={e => setHeight(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Input player height"
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button variant="outline-success" onClick={addPlayer}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreatePlayer;
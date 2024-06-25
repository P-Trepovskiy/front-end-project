import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button} from "react-bootstrap";
import {createLeague} from "../../http/playerApi";

const CreateLeague = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const addLeague = () => {
        createLeague({name: value}).then(data => {
            setValue('')
            onHide()
        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add league
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Input league name"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button variant="outline-success" onClick={addLeague}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateLeague;
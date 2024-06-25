import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, PLAYERS_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useNavigate()

    useEffect(() => {
        console.log(user);
        console.log(user.isAuth);
        console.log(user.role);
    }, [user])

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        user.setRole("")
        localStorage.removeItem('token')
        history(LOGIN_ROUTE)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'white'}} onClick={() => { history(PLAYERS_ROUTE) }}>Volleyball Players</NavLink>
                
                    <Nav className="ms-auto" style={{color: 'white'}}>
                        {user.isAuth && user.role === "ROLE_ADMIN" && 
                            <Button
                                variant={"outline-light"}
                                onClick={() => history(ADMIN_ROUTE)}
                            >
                                Панель адміністратора
                            </Button>
                        }
                        {user.isAuth &&
                            <Button
                                variant={"outline-light"}
                                onClick={() => logOut()}
                                className="ms-2"
                            >
                                Вийти
                            </Button>
                        }
                        {!user.isAuth &&
                            <Button variant={"outline-light"} onClick={() => history(LOGIN_ROUTE)}>Авторизація</Button>
                        }
                    </Nav>
            </Container>
        </Navbar>
    );
});

export default NavBar;
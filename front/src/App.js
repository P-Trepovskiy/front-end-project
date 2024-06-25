import React, { useState, useEffect, useContext} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Auth from "./pages/Auth"
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import Admin from './pages/Admin';
import PlayerPage from './pages/PlayerPage';
import Players from "./pages/Players";
import CheckAuth from "./components/CheckAuth";
import PrivateRoute from './utils/PrivateRoute';
import {Context} from "./index";

const App = observer(() => {
    const {user} = useContext(Context)

    return (
        <Router>
            <div>
            <CheckAuth/>
            <NavBar />
            <Routes>
                    <Route
                        path="/admin"
                        element={<PrivateRoute element={<Admin />} />}
                        exact
                    />
                    <Route
                        path="/home"
                        element={<PrivateRoute element={<Players />} />}
                        exact
                    />
                    <Route
                        path="/player/:id"
                        element={<PrivateRoute element={<PlayerPage />} />}
                        exact
                    />
                    <Route path="*" element={<Navigate to="/home" replace />} />
                    <Route
                        path="/login"
                        element={user.isAuth ? <Navigate to="/home" replace /> : <Auth />}
                        exact
                    />
                    <Route
                        path="/registration"
                        element={user.isAuth ? <Navigate to="/home" replace /> : <Auth />}
                        exact
                    />
                </Routes>
            </div>
        </Router>
    );
});

export default App;


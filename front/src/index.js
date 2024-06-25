import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from "./reportWebVitals";
import UserStore from "./store/UserStore";
import PlayersStore from "./store/PlayersStore";
import {BrowserRouter} from "react-router-dom";
import './styles.css';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));

const backgroundStyle = {
    backgroundImage: 'url(../public/background.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    height: '100vh', // Adjust as needed
};

root.render(
    <Context.Provider value={{
        user: new UserStore(),
        player: new PlayersStore()
    }}>
        <App style={backgroundStyle} />
    </Context.Provider>
);

reportWebVitals();

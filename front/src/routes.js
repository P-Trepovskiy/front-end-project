import Admin from "./pages/Admin";
import {ADMIN_ROUTE, LOGIN_ROUTE, PLAYERS_ROUTE, PLAYER_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import Auth from "./pages/Auth";
import Players from "./pages/Players";
import PlayerPage from "./pages/PlayerPage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: PLAYERS_ROUTE,
        Component: Players
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: PLAYER_ROUTE + "/:id",
        Component: PlayerPage
    }
]
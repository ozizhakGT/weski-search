import { Navigate } from "react-router-dom";

import Home from './screens/Home';
import NotFound from "./screens/NotFound";

// const DynamicGuard = (isLoggedIn, Screen = Outlet) => isLoggedIn ? <Screen /> : <Navigate to="/login" />;

const routes = () => [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/404',
        element: <NotFound />,
    },
    {
        path: '/*',
        element: <Navigate to='/' />,
    }
];

export default routes;
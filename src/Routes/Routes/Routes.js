import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Appoinments from "../../Pages/Appoinment/Appoinments/Appoinments";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Registration from "../../Pages/Registration/Registration";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/appoinment',
                element: <Appoinments />
            },

        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/registration',
        element: <Registration />
    }
])
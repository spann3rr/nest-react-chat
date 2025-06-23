import { createBrowserRouter } from "react-router-dom";
import Signup from "./auth/Signup";
import Login from "./auth/Login";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/sign-up",
        element: <Signup />
    }
]);

export default router;
import { createBrowserRouter } from "react-router";
import UserLayout from "../layouts/UserLayout";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <UserLayout />,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
]);
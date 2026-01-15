import { createBrowserRouter } from "react-router";
import UserLayout from "../layouts/UserLayout";
import Home from "../pages/Home/Home";
import Ataglance from "../pages/Ataglance/Ataglance";
import History from "../pages/History/History";
import Headmaster from "../pages/Teachers/Headmaster";
import AssistantHeadmaster from "../pages/Teachers/AssistantHeadmaster";
import Teachers from "../pages/Teachers/Teachers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "at-a-glance",
        element: <Ataglance />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "/teachers",
        element: <Teachers />,
      },
      {
        path: "/teachers/headmaster",
        element: <Headmaster />,
      },
      {
        path: "/teachers/assistant-headmaster",
        element: <AssistantHeadmaster/>,
      },
    ],
  },
]);
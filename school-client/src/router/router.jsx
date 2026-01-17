import { createBrowserRouter } from "react-router";
import UserLayout from "../layouts/UserLayout";
import Home from "../pages/Home/Home";
import Ataglance from "../pages/Ataglance/Ataglance";
import History from "../pages/History/History";
import Headmaster from "../pages/Teachers/Headmaster";
import AssistantHeadmaster from "../pages/Teachers/AssistantHeadmaster";
import Teachers from "../pages/Teachers/Teachers";
import Staff from "../pages/Teachers/Staff";
import Routine from "../pages/Academic/Routine";
import Students from "../pages/Academic/Students";
import Calender from "../pages/Academic/Calender";
import AdmissionForm from "../pages/Admission/AdmissionForm";
import Public from "../pages/Results/Public";
import Internal from "../pages/Results/Internal";
import Notice from "../pages/Notice/Notice";
import AdmissionNotice from "../pages/Admission/AdmissionNotice";
import AdmissionResult from "../pages/Admission/AdmissionResult";
import Contact from "../pages/Contact/Contact";
import Gallery from "../pages/Gallery/Gallery";
import NotFound from "../pages/NotFound/NotFound";

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
        element: <AssistantHeadmaster />,
      },
      {
        path: "/staff",
        element: <Staff />,
      },
      {
        path: "/academic/routine",
        element: <Routine />,
      },
      {
        path: "/academic/students",
        element: <Students />,
      },
      {
        path: "/academic/calendar",
        element: <Calender />,
      },
      {
        path: "/admission/form",
        element: <AdmissionForm />,
      },
      {
        path: "/admission/notice",
        element: <AdmissionNotice />,
      },
      {
        path: "/admission/result",
        element: <AdmissionResult />,
      },
      {
        path: "/results/public",
        element: <Public />,
      },
      {
        path: "/results/internal",
        element: <Internal />,
      },
      {
        path: "/notice",
        element: <Notice />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/gallery",
        element: <Gallery/>
      },
      {
        path: "*",
        element: <NotFound/>
      }
    ],
  },
]);

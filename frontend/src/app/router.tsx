import {
  createBrowserRouter,
} from "react-router-dom";

import LandingPage from "@/pages/Landing/LandingPage";
import VerifyPage from "@/pages/Verify/VerifyPage";
import ComparePage from "@/pages/Compare/ComparePage";
import HistoryPage from "@/pages/History/HistoryPage";

const router = createBrowserRouter([

  {
    path: "/",
    element: <LandingPage />,
  },

  {
    path: "/verify",
    element: <VerifyPage />,
  },

  {
    path: "/compare",
    element: <ComparePage />,
  },
  {
 path:"/history",
 element:<HistoryPage/>
}

]);


export default router;
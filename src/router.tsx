import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Festivals from "./pages/Festivals";
import Facilities from "./pages/Facilities";
import Donate from "./pages/Donate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App page={<Home />} />,
  },
  {
    path: "/about",
    element: <App page={<About />} />,
  },
  {
    path: "/services",
    element: <App page={<Services />} />,
  },
  {
    path: "/festivals",
    element: <App page={<Festivals />} />,
  },
  {
    path: "/facilities",
    element: <App page={<Facilities />} />,
  },
  {
    path: "/donate",
    element: <App page={<Donate />} />,
  }
]);

export default router;
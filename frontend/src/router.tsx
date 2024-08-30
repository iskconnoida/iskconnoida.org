/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";

/** lazy load pages to reduce page size */
const About = lazy(() => import("./pages/About"));
const Donate = lazy(() => import("./pages/Donate"));
const EventInfo = lazy(() => import("./pages/EventInfo"));
const EventsAndFestivals = lazy(() => import("./pages/EventsAndFestivals"));
const Facilities = lazy(() => import("./pages/Facilities"));
const FourZeroFour = lazy(() => import("./pages/FourZeroFour"));
const Home = lazy(() => import("./pages/Home"));
const Media = lazy(() => import("./pages/Media"));
const OurServices = lazy(() => import("./pages/OurServices"));
const RefundReturns = lazy(() => import("./pages/RefundReturns"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));

/** Use react-router-dom to provide routes to react app */
const router = createBrowserRouter([
  {
    path: "*",
    element: <App page={<FourZeroFour />} />,
  },
  {
    path: "/",
    element: <App page={<Home />} />,
  },
  {
    path: "/about",
    element: <App page={<About />} />,
  },
  {
    path: "/events",
    element: <App page={<EventsAndFestivals />} />,
  },
  {
    path: "/events/:id",
    element: <App page={<EventInfo />} />,
  },
  {
    path: "/services",
    element: <App page={<OurServices />} />,
  },
  {
    path: "/facilities",
    element: <App page={<Facilities onHomePage={false} />} />,
  },
  {
    path: "/terms-conditions",
    element: <App page={<TermsAndConditions />} />,
  },
  {
    path: "/refund-returns-page",
    element: <App page={<RefundReturns />} />,
  },
  {
    path: "/donate",
    element: <App page={<Donate />} />,
  },
  {
    path: "/media/gallery",
    element: <App page={<Media mediaSection="gallery" />} />,
  },
  {
    path: "/media/kirtans",
    element: <App page={<Media mediaSection="kirtans" />} />,
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import RefundReturns from "./components/RefundReturns";
import TermsAndConditions from "./components/TermsAndConditions";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App page={<Home />} />,
  },
  {
    path: "/terms-conditions",
    element: <App page={<TermsAndConditions />} />,
  },
  {
    path: "/refund-returns-page",
    element: <App page={<RefundReturns />} />,
  },
]);

export default router;

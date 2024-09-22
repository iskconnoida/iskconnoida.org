import { ScrollRestoration } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import BottomBar from "./components/BottomBar";
import CTC from "./components/CTC";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App(props: {
  page: JSX.Element;
  hideLayout?: boolean;
}) {
  const { hideLayout, page } = props;
  return (
    <>
      {!hideLayout && <Navbar />}
      {page}
      {!hideLayout && <CTC />}
      {!hideLayout && <Footer />}
      {!hideLayout && <BottomBar />}
      <ScrollRestoration />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="z-50"
      />
    </>
  );
}

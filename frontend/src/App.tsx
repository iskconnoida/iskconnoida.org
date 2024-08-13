import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import BottomBar from "./components/BottomBar";
import CTC from "./components/CTC";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App(props: { page: JSX.Element }) {
  return (
    <>
      <Navbar />
      {props.page}
      <CTC />
      <Footer />
      <BottomBar />
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

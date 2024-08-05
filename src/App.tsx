import BottomBar from "./components/BottomBar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App(props: {page: JSX.Element}) {
  return (
    <>
    <Navbar />
    {props.page}
    <Footer />
    <BottomBar />
    </>
  )
}
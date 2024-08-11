import CTC from "./components/CTC";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App(props: {page: JSX.Element}) {
  return (
    <>
    <Navbar />
    {props.page}
    <CTC />
    <Footer />
    </>
  )
}
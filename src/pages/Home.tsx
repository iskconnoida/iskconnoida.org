import Donate from "../components/Donate";
import Events from "../components/Events";
import Hero from "../components/Hero";
import Prabhupada from "../components/Prabhupada";
import Services from "../components/Services";
import Social from "../components/Social";
import { Facilities } from "./Facilities";

export default function Home() {
  return (
    <>
      <Hero />
      <Events />
      <img
        src="/images/divider.svg"
        className="h-24 w-48 md:w-56 mt-2 md:mt-8"
        alt="Divider"
      />
      <Donate />
      <img
        src="/images/divider.svg"
        className="h-24 w-48 md:w-56 mt-2 md:mt-8"
        alt="Divider"
      />
      <Services />
      <Facilities onHomePage={true} />
      <Social />
      <Prabhupada />
    </>
  );
}

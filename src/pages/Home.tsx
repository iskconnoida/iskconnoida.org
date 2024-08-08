import { useState } from "react";
import Hero from "../components/Hero";
import Events from "../components/Events";
import Donate from "../components/Donate";
import Services from "../components/Services";
import Social from "../components/Social";
import Prabhupada from "../components/Prabhupada";

export default function Home() {
  const [count, setCount] = useState(0);

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
      {/* <img
        src="/images/divider.svg"
        className="h-24 w-48 md:w-56 mt-2 md:mt-8"
        alt="Divider"
      /> */}
      <Social />
      <Prabhupada />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/images/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src="/images/react.svg"
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="p-2">
        <button onClick={() => setCount(() => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-[#888]">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

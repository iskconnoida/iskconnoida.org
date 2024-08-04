import { useState } from "react";
import "./Home.css";
import Hero from "../components/Hero";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Hero />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/images/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="/images/react.svg" className="logo react" alt="React logo" />
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
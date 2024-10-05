import { useEffect, useState } from "react";
import Campaign from "../components/Campaign";
import Donate from "../components/Donate";
import Events from "../components/Events";
import Hero from "../components/Hero";
import Prabhupada from "../components/Prabhupada";
import Services from "../components/Services";
import Social from "../components/Social";
import Facilities from "./Facilities";
import {
  getStore,
  getTheme,
  initialState,
  setStore,
  setTheme,
} from "../utils/theme";

/**
 *
 *
 * @return {JSX.Element} Home page
 */
export default function Home(): JSX.Element {
  const [themeData, setThemeData] = useState(getStore("ThemeData"));
  useEffect(() => {
    switch (themeData) {
      case undefined:
        setThemeData(initialState);
        break;
      case null:
        setThemeData(initialState);
        break;
    }
    async function updateTheme() {
      if (!themeData) {
        const newTheme = await getTheme();
        setThemeData(newTheme);
        setStore("ThemeData", newTheme);
      } else if (
        new Date().getTime() - new Date(themeData.fetchedAt).getTime() >
        24 * 60 * 60 * 1000
      ) {
        const newTheme = await getTheme();
        setThemeData(newTheme);
        setStore("ThemeData", newTheme);
      }
    }
    async function doChanges() {
      await updateTheme();
      setStore("ThemeData", themeData);
      setTheme(themeData);
    }
    doChanges();
  }, [themeData]);
  return (
    <>
      <Hero />
      <Campaign
        img="/images/campaign.webp"
        to="https://iic.iskconnoida.org/donate/Anna_Daan_2024"
      />
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
      <img
        src="/images/divider.svg"
        className="h-24 w-48 md:w-56 mt-2 md:mt-8"
        alt="Divider"
      />
      <Facilities onHomePage={true} />
      <Social />
      <Prabhupada />
    </>
  );
}

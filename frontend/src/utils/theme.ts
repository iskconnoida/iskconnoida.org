import axios from "axios";

interface Shades {
  fifty: string;
  hundred: string;
  twoHundred: string;
  threeHundred: string;
  fourHundred: string;
  fiveHundred: string;
  sixHundred: string;
  sevenHundred: string;
  eightHundred: string;
  nineHundred: string;
}

interface Theme {
  name: string;
  shades: Shades;
  fetchedAt: Date;
}

export const initialState: Theme = {
  name: "violet",
  shades: {
    fifty: "#f3f3ff",
    hundred: "#ede9fe",
    twoHundred: "#ddd6fe",
    threeHundred: "#c4b5fd",
    fourHundred: "#a78bfa",
    fiveHundred: "#8b5cf6",
    sixHundred: "#7c3aed",
    sevenHundred: "#6d28d9",
    eightHundred: "#5b21b6",
    nineHundred: "#4c1d95",
  },
  fetchedAt: new Date(),
};

export const getTheme = async () => {
  const res = await axios.get(window.location.origin + "/api/v1/colors");
  const theme = {
    name: res.data.name,
    shades: res.data.shades,
    fetchedAt: new Date(),
  };
  return theme;
};

export const setTheme = (theme: Theme) => {
  document
    .getElementById("root")
    ?.style.setProperty("--primary-50", theme.shades.fifty);
  document
    .getElementById("root")
    ?.style.setProperty("--primary-100", theme.shades.hundred);
  document
    .getElementById("root")
    ?.style.setProperty("--primary-200", theme.shades.twoHundred);
  document
    .getElementById("root")
    ?.style.setProperty("--primary-300", theme.shades.threeHundred);
  document
    .getElementById("root")
    ?.style.setProperty("--primary-400", theme.shades.fourHundred);
  document
    .getElementById("root")
    ?.style.setProperty("--primary-500", theme.shades.fiveHundred);
  document
    .getElementById("root")
    ?.style.setProperty("--primary-600", theme.shades.sixHundred);
  document
    .getElementById("root")
    ?.style.setProperty("--primary-700", theme.shades.sevenHundred);
  document
    .getElementById("root")
    ?.style.setProperty("--primary-800", theme.shades.eightHundred);
  document
    .getElementById("root")
    ?.style.setProperty("--primary-900", theme.shades.nineHundred);
};

export const setStore = (storeName: string, data: unknown) => {
  localStorage.setItem(storeName, JSON.stringify(data));
};

export const getStore = (storeName: string) => {
  return JSON.parse(localStorage.getItem(storeName)!);
};

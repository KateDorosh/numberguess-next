import { useState, useEffect } from "react";
import Header from "../components/layouts/Header";
import StaticBody from "../components/layouts/StaticBody";
import MainField from "../components/game/MainField";
import SEO from "@/components/SEO";
import store from "@/store";

const MathEquationMode = ({ challengeLink }) => {
  const SEO_DATA = {
    title: "Daily Math Puzzle Game",
    description:
      "Solve the daily challenge by crafting an equation that equals the target number answer. Math-based game inspired by Wordle.",
    keywords: "Daily Math Puzzle, math wordle",
    url: "https://numberguess.org/",
  };
  const [darkMode, setDarkMode] = useState(store.getState().darkMode);
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setDarkMode(store.getState().darkMode);
    });
    return unsubscribe;
  }, []);

  return (
    <div className={"App " + (darkMode ? "darkMode " : "")}>
      <SEO SEO_DATA={SEO_DATA} />
      <Header challengeLink={challengeLink} />
      <MainField challengeLink={challengeLink} />
      <StaticBody />
    </div>
  );
};

export default MathEquationMode;

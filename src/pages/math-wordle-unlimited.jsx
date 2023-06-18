import { useState, useEffect } from "react";
import Header from "../components/layouts/Header";
import StaticBody from "../components/layouts/StaticBody";
import MainField from "../components/game/MainField";
import SEO from "@/components/SEO";
import store from "@/store";

const MathWorldleUnlimited = () => {
  const SEO_DATA = {
    title: "Math Wordle Unlimited Play",
    description:
      "Play math wordle unlimited without having to wait for the next puzzle. Guess the correct equation!",
    keywords: "math wordle unlimited, math wordle",
    url: "https://numberguess.org/math-wordle-unlimited",
  };

  useEffect(() => {
    store.dispatch({
      type: "dailyChallengeMode",
      payload: false,
    });
    store.dispatch({
      type: "practiceMode",
      payload: true,
    });
    store.dispatch({
      type: "numbersOnlyMode",
      payload: false,
    });
  }, []);
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
      <Header />
      <MainField />
      <StaticBody />
    </div>
  );
};

export default MathWorldleUnlimited;

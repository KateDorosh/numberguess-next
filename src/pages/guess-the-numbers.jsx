import { useState, useEffect } from "react";
import Header from "../components/layouts/Header";
import StaticBody from "../components/layouts/StaticBody";
import MainField from "../components/game/MainField";
import SEO from "@/components/SEO";
import store from "@/store";

const NumberOnlyMode = () => {
  const SEO_DATA = {
    title: "Guess The Number Sequence",
    description:
      "A number guessing game, solve a sequence of numbers ranging from 5 to 10 digits with 6 tries. Inspired by Wordle Numbers!",
    keywords: "guess the number, number guessing game, wordle numbers",
    url: "https://numberguess.org/guess-the-numbers",
  };

  useEffect(() => {
    store.dispatch({
      type: "dailyChallengeMode",
      payload: false,
    });
    store.dispatch({
      type: "numbersOnlyMode",
      payload: true,
    });
    store.dispatch({
      type: "practiceMode",
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

export default NumberOnlyMode;

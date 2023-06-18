import React, { useEffect, useState } from "react";
import Link from "next/link";
import store from "../../store";

const NavBar = () => {
  const [settings, setSettings] = useState({
    dailyChallengeMode: store.getState().dailyChallengeMode,
    numbersOnlyMode: store.getState().numbersOnlyMode,
    practiceMode: store.getState().practiceMode,
  });

  const changeToDailyMode = () => {
    store.dispatch({
      type: "dailyChallengeMode",
      payload: true,
    });
    store.dispatch({
      type: "numbersOnlyMode",
      payload: false,
    });
    store.dispatch({
      type: "practiceMode",
      payload: false,
    });

    setSettings({
      dailyChallengeMode: true,
      numbersOnlyMode: false,
      practiceMode: false,
    });
  };
  const changetoNumberMode = () => {
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

    setSettings({
      dailyChallengeMode: false,
      numbersOnlyMode: true,
      practiceMode: false,
    });
  };

  const changePracticeMode = () => {
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

    setSettings({
      dailyChallengeMode: false,
      numbersOnlyMode: false,
      practiceMode: true,
    });
  };

  useEffect(() => {
    setSettings({
      dailyChallengeMode: store.getState().dailyChallengeMode,
      numbersOnlyMode: store.getState().numbersOnlyMode,
      practiceMode: store.getState().practiceMode,
    });
  }, []);

  return (
    <div
      className="nav-container"
      style={{ maxWidth: "600px", minWidth: "275px" }}
    >
      <Link
        href="/"
        onClick={changeToDailyMode}
        style={{
          backgroundColor: settings.dailyChallengeMode ? "#6eb35a" : "#ebedf3",
          border: settings.dailyChallengeMode ? "none" : "none",
          color: settings.dailyChallengeMode ? "white" : "#69758e",
        }}
      >
        Daily Math
      </Link>
      <Link
        href="/math-wordle-unlimited"
        onClick={changePracticeMode}
        style={{
          backgroundColor: settings.practiceMode ? "#6eb35a" : "#ebedf3",
          border: settings.practiceMode ? "none" : "none",
          color: settings.practiceMode ? "white" : "#69758e",
        }}
      >
        Unlimited Math
      </Link>
      <Link
        href="/guess-the-numbers"
        onClick={changetoNumberMode}
        style={{
          backgroundColor: settings.numbersOnlyMode ? "#6eb35a" : "#ebedf3",
          border: settings.numbersOnlyMode ? "none" : "none",
          color: settings.numbersOnlyMode ? "white" : "#69758e",
        }}
      >
        Number Guess
      </Link>
    </div>
  );
};

export default NavBar;

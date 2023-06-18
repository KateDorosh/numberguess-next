import React from "react";
import { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import Router from "next/router";
import Dropdown from "react-bootstrap/Dropdown";
import store from "../../store";
export default function NavBarDropDown() {
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

    Router.push("/");
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

    Router.push("/guess-the-numbers");
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

    Router.push("/math-wordle-unlimited");
  };

  useEffect(() => {
    setSettings({
      dailyChallengeMode: store.getState().dailyChallengeMode,
      numbersOnlyMode: store.getState().numbersOnlyMode,
      practiceMode: store.getState().practiceMode,
    });
  }, []);

  return (
    <Dropdown>
      <Dropdown.Toggle className="navBtn" id="navBtn">
        <i className="fas fa-bars"></i>
      </Dropdown.Toggle>
      <Dropdown.Menu style={{ position: "absolute", left: "-192px" }}>
        <Dropdown.Item>
          <div
            onClick={changeToDailyMode}
            className={"non-decoration"}
            style={{
              backgroundColor: settings.dailyChallengeMode
                ? "#6eb35a"
                : "#ebedf3",
              border: settings.dailyChallengeMode ? "none" : "none",
              color: settings.dailyChallengeMode ? "white" : "#69758e",
            }}
          >
            Daily Math Challenge
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div
            onClick={changePracticeMode}
            className={"non-decoration"}
            style={{
              backgroundColor: settings.practiceMode ? "#6eb35a" : "#ebedf3",
              border: settings.practiceMode ? "none" : "none",
              color: settings.practiceMode ? "white" : "#69758e",
            }}
          >
            Unlimited Math Challenge
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div
            onClick={changetoNumberMode}
            className={"non-decoration"}
            style={{
              backgroundColor: settings.numbersOnlyMode ? "#6eb35a" : "#ebedf3",
              border: settings.numbersOnlyMode ? "none" : "none",
              color: settings.numbersOnlyMode ? "white" : "#69758e",
            }}
          >
            Number Guess Puzzle
          </div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

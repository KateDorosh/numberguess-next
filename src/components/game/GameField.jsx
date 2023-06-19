import { Row, Col } from "react-bootstrap";
import store from "../../store";
import { useState, useEffect } from "react";

const GameField = (props) => {
  const dailyChallengeMode = store.getState().dailyChallengeMode;
  const numbersOnlyMode = store.getState().numbersOnlyMode;
  const practiceMode = store.getState().practiceMode;
  const gameStatus = store.getState().status;

  let difficulty = 0;
  if (dailyChallengeMode) {
    difficulty = store.getState().equationLength;
  }
  if (practiceMode) {
    difficulty = store.getState().unlimitedLength;
  }
  if (numbersOnlyMode) {
    difficulty = store.getState().numberLength;
  }
  const [currentEquation, setCurrentEquation] = useState("");
  const [result, setResult] = useState();
  const [remainTime, setRemainTime] = useState();

  useEffect(() => {
    const guessStatus = JSON.parse(
      localStorage.getItem(`Guess-Status-${difficulty}`)
    );
    if (guessStatus) {
      setCurrentEquation(guessStatus.solution);
      setResult(eval(guessStatus.solution));
    }
  }, []);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem(`Guess-Status-${difficulty}`))) {
      const guessStatus = JSON.parse(
        localStorage.getItem(`Guess-Status-${difficulty}`)
      );
      setCurrentEquation(guessStatus.solution);
      setResult(eval(guessStatus.solution));
    }
  }, [gameStatus]);

  useEffect(() => {
    const nextTime = localStorage.getItem(`guess-next-goal-time-${difficulty}`);
    const differentTime = nextTime - Date.now();

    setRemainTime(differentTime >= 0 ? differentTime : 0);
  }, [gameStatus]);

  useEffect(() => {
    if (props.challengeLink !== null) {
    } else {
      const intervalId = setInterval(() => {
        setRemainTime((prevTime) => {
          const newTime = prevTime - 1000;
          if (newTime <= 0) {
            clearInterval(intervalId);
            return 0;
          }
          return newTime;
        });
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [props.challengeLink, remainTime]);

  let secondsValue = Math.floor((remainTime / 1000) % 60);
  let minutesValue = Math.floor((remainTime / 1000 / 60) % 60);
  if (secondsValue < 10) {
    secondsValue = "0" + secondsValue;
  }
  if (minutesValue < 10) {
    minutesValue = "0" + minutesValue;
  }
  const seconds = secondsValue;
  const minutes = minutesValue;
  const hours = Math.floor((remainTime / 1000 / 60 / 60) % 24);

  const [visibilityState, setVisibilityState] = useState(null);

  useEffect(() => {
    setVisibilityState(document.visibilityState);

    const handleVisibilityChange = () => {
      setVisibilityState(document.visibilityState);
      if (
        document.visibilityState === "visible" &&
        dailyChallengeMode === true
      ) {
        const nextTime = localStorage.getItem(
          `guess-next-goal-time-${difficulty}`
        );
        const differentTime = nextTime - Date.now();

        setRemainTime(differentTime >= 0 ? differentTime : 0);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup by removing event listener
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (props.challengeLink !== null) {
    } else {
      const currentStatus = JSON.parse(
        localStorage.getItem(`Guess-Status-${difficulty}`)
      );
      const currentSolution = currentStatus && currentStatus?.solution;
      const currentGuessStatus = currentStatus && currentStatus?.guessStatus;
      const guessLength = currentGuessStatus && currentGuessStatus?.length;
      const gameState =
        (guessLength - 1 >= 0 &&
          currentGuessStatus[guessLength - 1]?.join("") === currentSolution) ||
        guessLength === 6;
      if (guessLength < 6 && gameState === false) {
      } else {
        remainTime <= 0 &&
          localStorage.removeItem(`guess-next-goal-time-${difficulty}`);
        remainTime <= 0 &&
          localStorage.removeItem(`Guess-Status-${difficulty}`);
        remainTime <= 0 && props.autoStart();
      }
    }
  }, [remainTime]);

  function countOperators(equation) {
    const operatorPattern = /[-+/*]/g;
    // Split the equation into an array of characters
    const chars = equation?.split("");
    // Filter the array to include only operators
    const operators = chars?.filter((char) => char.match(operatorPattern));
    // Return the length of the operators array
    return operators?.length;
  }

  const keyCheck = (rowIndex, key, position) => {
    if (rowIndex < props.currentLine) {
      let classStr = "";
      if (
        rowIndex === props.currentLine - 1 &&
        props.currentLine !== store.getState().flip
      ) {
        classStr = "flip ";
      }
      switch (true) {
        case props.equation[position] === key:
          return classStr + "green_cell";
        case props.equation[position] !== key &&
          props.equation.includes(key) &&
          key !== "":
          return classStr + "orange_cell";
        case props.equation[position] !== key &&
          !props.equation.includes(key) &&
          key !== "":
          return classStr + "gray_cell";
        default:
          return classStr;
      }
    }

    if (
      rowIndex === props.currentLine &&
      key !== "" &&
      !props.moves[props.currentLine][position + 1]
    ) {
      return "fillCell";
    }
  };

  setTimeout(() => {
    store.dispatch({
      type: "flip",
      payload: props.currentLine,
    });
  }, 1000);

  return (
    <div
      className="mx-auto mb-0 gameField"
      style={{
        maxWidth: "580px",
        minWidth: "200px",
        paddingRight: "5px",
        paddingLeft: "5px",
      }}
    >
      {numbersOnlyMode ? (
        props.challengeLink ? (
          <div></div>
        ) : (
          <div className="text-center">
            <button
              className="navBtn"
              style={{
                padding: "3px 5px",
                borderRadius: "5px",
              }}
              onClick={props.restart}
            >
              <i
                className="fas fa-sync"
                style={{
                  marginRight: "5px",
                }}
              ></i>
              Reset
            </button>
            <span>Guess the hidden number</span>
          </div>
        )
      ) : practiceMode ? (
        <div className="text-center">
          <button
            className="navBtn"
            style={{
              padding: "3px 5px",
              borderRadius: "5px",
            }}
            onClick={props.restart}
          >
            <i
              className="fas fa-sync"
              style={{
                marginRight: "5px",
              }}
            ></i>
            Reset
          </button>
          <span className="text-top-gameField">Equation uses</span>{" "}
          <span className="bold-text">
            {countOperators(store.getState().equation)}
          </span>{" "}
          <span className="text-top-gameField">operator that equals</span>{" "}
          <span className="bold-text">{eval(store.getState().equation)}</span>
        </div>
      ) : props.challengeLink ? (
        <div></div>
      ) : (
        <div className="text-center">
          {remainTime > 0 ? (
            <div>
              <div>
                <span className="text-top-gameField">Equation uses</span>{" "}
                <span className="bold-text">
                  {countOperators(currentEquation)}
                </span>{" "}
                <span className="text-top-gameField">operator that equals</span>{" "}
                <span className="bold-text">{result}</span>
              </div>
              <div>New Puzzle in {`${hours}:${minutes}:${seconds}`}</div>
            </div>
          ) : (
            <div>
              <span className="text-top-gameField">Equation uses</span>{" "}
              <span className="bold-text">
                {currentEquation
                  ? countOperators(currentEquation)
                  : countOperators(store.getState().equation)}
              </span>{" "}
              <span className="text-top-gameField">operator that equals</span>{" "}
              <span className="bold-text">
                {result ? result : eval(store.getState().equation)}
              </span>
            </div>
          )}
        </div>
      )}

      {props.moves.map((array, indx) => {
        return (
          <Row
            className="justify-content-center mx-auto"
            style={{ width: "100%", flexWrap: "wrap" }}
            key={`${array.join("")}-${indx}`}
          >
            {array.map((move, index) => {
              return (
                <Col
                  className="p-0"
                  style={{ maxWidth: "60px" }}
                  key={`${move}-${index}`}
                >
                  <Cell
                    style={
                      indx === props.currentLine - 1
                        ? { animationDelay: (index * 0.1).toString() + "s" }
                        : {}
                    }
                    className={move !== "" && keyCheck(indx, move, index)}
                    value={move}
                    key={indx + index}
                    challengeLink={props.challengeLink}
                  />
                </Col>
              );
            })}
          </Row>
        );
      })}
    </div>
  );
};

const Cell = (props) => {
  return (
    <div style={props.style} className={`cell  ` + props.className}>
      {props.value ? props.value : ""}
    </div>
  );
};

export default GameField;

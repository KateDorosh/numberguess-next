import { Row, Col } from "react-bootstrap";
import ShareBar from "./ShareBar";
import CustomParagraph from "../util/CustomParagraph";
import store from "../../store";
import Link from "next/link";

const StaticBody = () => {
  const numbersOnlyMode = store.getState().numbersOnlyMode;
  const practiceMode = store.getState().practiceMode;
  const dailyChallengeMode = store.getState().dailyChallengeMode;
  const DemoCell = (props) => {
    return (
      <div style={props.style} className={"demoCell " + props.className}>
        {props.value ? props.value : ""}
      </div>
    );
  };
  return (
    <div
      style={{ overflowX: "hidden", paddingLeft: "12px", paddingRight: "12px" }}
    >
      <Row className="secondaryColor2">
        <ShareBar />
        <Col
          xxl="6"
          xl="7"
          lg="7"
          md="10"
          className="text-center text-center pt-4 pb-4 mx-auto"
        >
          {/* DESCRIPTION */}

          {numbersOnlyMode ? (
            <div>
              <h4 style={{ fontWeight: "600" }}>Guess The Numbers</h4>
              <CustomParagraph>
                Try to guess the randomly generated number within 6 attempts.
                You can adjust the difficulty level by changing the sequence
                length of numbers to guess, ranging from 5 to 10 numbers.
              </CustomParagraph>

              <CustomParagraph>
                The primary goal of the game is to accurately guess the correct
                numbers. As you enter your first sequence of numbers, {"you'"}ll
                receive colored highlights as clues, indicating how close you
                are to guessing all the correct numbers. If all the rows are
                highlighted in GREEN, you have won!
              </CustomParagraph>
              <Row className="justify-content-center">
                <DemoCell value={3} />
                <DemoCell className="orange_cell" value={4} />
                <DemoCell className="green_cell" value={9} />
                <DemoCell value={2} />
                <DemoCell className="green_cell" value={7} />
                <DemoCell className="orange_cell" value={6} />
              </Row>
              <CustomParagraph>
                If a number is present in the sequence but in the wrong
                position, it will be highlighted in{" "}
                <span className="orange fw-bold">ORANGE.</span>
              </CustomParagraph>
              <CustomParagraph>
                If it is in the correct position, it will be highlighted in{" "}
                <span className="green fw-bold">GREEN.</span>
              </CustomParagraph>
              <CustomParagraph>
                If the number is not present in the sequence at all, the colour
                will be <span className="grey fw-bold">GREY.</span>
              </CustomParagraph>
            </div>
          ) : practiceMode ? (
            <div>
              <h4 style={{ fontWeight: "600" }}>Math Wordle Unlimited</h4>
              <CustomParagraph>
                Guess an unlimited number of randomly generated math puzzles. If
                you prefer to play and practice continuously without waiting for
                the next puzzle challenge, Math Wordle Unlimited provides
                exactly that opportunity.
              </CustomParagraph>
              <CustomParagraph>
                After completing your first attempt, the next math puzzle will
                be immediately available for you to play again. This applies to
                all three levels: Easy, Medium, and Hard.
              </CustomParagraph>

              <CustomParagraph>
                In the unlimited version, tracking your statistics to monitor
                your performance is not available.
              </CustomParagraph>
            </div>
          ) : (
            <div>
              <h4 style={{ fontWeight: "600" }}>Daily Math Puzzle Challenge</h4>
              <CustomParagraph>
                Guess the randomly generated daily math puzzle within 6 tries.
              </CustomParagraph>
              <CustomParagraph>
                The goal of the challenge is to input the correct sum that
                equals the displayed answer. Additionally, a hint indicating the
                number of arithmetic signs used in the sum will be shown.
              </CustomParagraph>
              <CustomParagraph>
                Once you have made your attempt, the next math puzzle will be
                available in 6 hours, which is up to 4 attempts in 24 hours for
                each of the 3 levels. (Easy, Medium, Hard)
              </CustomParagraph>
              <CustomParagraph>
                You can track your statistics to monitor your performance over
                time and strive to improve your results with each attempt.
              </CustomParagraph>
              <CustomParagraph>
                Begin by entering your initial guess for the math equation. In
                the given example, the sum should equal 61, using only one
                arithmetic sign.
              </CustomParagraph>
              <Row className="justify-content-center">
                <DemoCell value={3} />
                <DemoCell className="orange_cell" value={4} />
                <DemoCell className="orange_cell" value={"+"} />
                <DemoCell value={2} />
                <DemoCell className="green_cell" value={7} />
              </Row>
              <CustomParagraph>
                If a number or sign is present in the equation but in the wrong
                position, it will be highlighted in{" "}
                <span className="orange fw-bold">ORANGE.</span>
              </CustomParagraph>
              <CustomParagraph>
                If it is in the correct position, it will be highlighted in{" "}
                <span className="green fw-bold">GREEN.</span>
              </CustomParagraph>
              <CustomParagraph>
                If the number or sign is not present in the equation at all, the
                colour will be <span className="grey fw-bold">GREY.</span>
              </CustomParagraph>
            </div>
          )}
        </Col>
      </Row>
      {/* RULES */}

      {dailyChallengeMode ? (
        <Row className="secondaryColor">
          <Col
            xxl="6"
            xl="7"
            lg="7"
            md="12"
            className="text-center pt-4 mx-auto"
          >
            {/* HISTORY */}
            <h4 style={{ fontWeight: "600" }}>What is Number Guess?</h4>
            <CustomParagraph>
              Introducing Number Guess, a math game inspired by the success of
              Wordle in 2021.
            </CustomParagraph>
            <CustomParagraph>
              This exciting twist brings you Wordle with numbers. Your goal is
              to guess the correct numbers or mathematical equations. Immerse
              yourself in the challenge as you input your guesses, with the
              added excitement of colored highlights offering valuable clues.
            </CustomParagraph>
            <CustomParagraph>
              These vibrant cues indicate your proximity to solving the puzzle,
              and when all rows are brilliantly illuminated in GREEN, victory is
              yours! Engage in this delightful math game with friends and embark
              on a brain-training adventure that guarantees endless fun.
            </CustomParagraph>
          </Col>
        </Row>
      ) : (
        <div></div>
      )}

      {/* FOOTER */}
      {/* <Row className="text-center pb-4 secondaryColor">
        <ShareBar />
      </Row> */}
      <Row className="text-center pb-4 footer">
        <div>
          Number Guess © {new Date().getFullYear()} All rights reserved. |{" "}
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            href="mailto:assist@techie.com"
          >
            Feedback
          </Link>{" "}
          |{" "}
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            href="https://www.facebook.com/numberguess"
            target="_blank"
          >
            <i className="fab fa-facebook-square"></i>
          </Link>{" "}
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            href="https://www.youtube.com/numberguess"
            target="_blank"
          >
            <i className="fab fa-youtube-square"></i>
          </Link>
        </div>
      </Row>
    </div>
  );
};

export default StaticBody;

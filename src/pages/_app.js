import { useState } from "react";
import "@/styles/globals.css";
import { SSRProvider } from "react-bootstrap";
import store from "../store";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const currentUrl = router.asPath;
  if (currentUrl.includes("math-wordle-unlimited")) {
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
  }
  if (currentUrl.includes("guess-the-numbers")) {
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
  }

  const [settings, setSettings] = useState({
    challengeLink: router.asPath.includes("/challenge")
      ? router.asPath.split("/challenge/")[1]
      : null,
  });
  return (
    <>
      <SSRProvider>
        <Component {...pageProps} challengeLink={settings.challengeLink} />
      </SSRProvider>
    </>
  );
}

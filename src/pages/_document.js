import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon-196x196.png" sizes="196x196" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="/favicon-128x128.png" sizes="128x128" />
        <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-57x57.png" sizes="57x57" />
        <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-114x114.png" sizes="114x114" />
        <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-72x72.png" sizes="72x72" />
        <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-144x144.png" sizes="144x144" />
        <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-60x60.png" sizes="60x60" />
        <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-120x120.png" sizes="120x120" />
        <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-76x76.png" sizes="76x76" />
        <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-152x152.png" sizes="152x152" />
        
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Heebo:wght@600&family=Quattrocento+Sans:wght@400;700&display=swap" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />

        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Play Number Guess, by guessing the math puzzle within 6 tries using only numbers and arithmetic signs! A math game like Wordle." />
        <meta name="keywords" content="Number guess, math, puzzle, game, fun, play, number, plus, minus, multiply, divide, calculate, sign, equals, equations, wordle" />

        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-YD7GSZRT0P" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

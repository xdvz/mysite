import { createGlobalStyle, ThemeProvider } from "styled-components"

import original from "react95/dist/themes/original"
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2"
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2"
import { styleReset } from "react95"

import StartPanel from "./StartPanel"
import Computer from "./Computer"
import WindowsFrame from "./WindowsFrame"

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif', sans-serif;
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif', sans-serif;
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  
  body {
    font-family: 'ms_sans_serif', sans-serif;
    background: teal;
  }
  ${styleReset}
`

const App = () => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={original}>
      {/* <WindowsFrame /> */}
      <Computer />
      <StartPanel />
    </ThemeProvider>
  </>
)

export default App

import { ThemeProvider } from "styled-components";
import { colors } from "./assets/colors";
import { GlobalStyle } from "./assets/GlobalStyles";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={colors}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

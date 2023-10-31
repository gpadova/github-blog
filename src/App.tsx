import { ThemeProvider } from "styled-components";
import { colors } from "./assets/colors";
import { GlobalStyle } from "./assets/GlobalStyles";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./contexts/GlobalContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={colors}>
          <GlobalProvider>
            <GlobalStyle />
            <Router />
          </GlobalProvider>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

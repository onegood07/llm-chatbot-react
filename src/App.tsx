import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoginPage />
    </ThemeProvider>
  );
}

export default App;

import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DetailPage from "./pages/DetailPage";
import { useUserStore } from "./store/userStore";

function App() {
  const isLogin = useUserStore((state) => state.isLogin);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              isLogin ? (
                <Navigate to="/detail" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/login"
            element={
              isLogin ? <Navigate to="/detail" replace /> : <LoginPage />
            }
          />
          <Route
            path="/detail"
            element={
              isLogin ? <DetailPage /> : <Navigate to="/login" replace />
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

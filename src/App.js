import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";

import theme from "./theme.js";
import TopBar from "./components/TopBar/index.js";
import Routes from "./Routes.js";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <TopBar />
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;

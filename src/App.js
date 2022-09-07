import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";

import { useLocalStorage } from "./utils/storage.js";
import theme from "./theme.js";
import defaultConfig from "./config.js";
import TopBar from "./components/TopBar/index.js";
import Routes from "./Routes.js";
import "./App.css";

function App() {
  const [ config, setConfig ] = useLocalStorage("config", defaultConfig);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <TopBar config={config} />
        <Routes config={config} setConfig={setConfig} />
      </Router>
    </ThemeProvider>
  );
}

export default App;

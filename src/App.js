import { createTheme, ThemeProvider } from "@mui/material";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import "./App.css";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#56300F"
      },
      secondary: {
        main: "#70A437"
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/form1">Form 1</Link>
            </li>
            <li>
              <Link to="/form2">Form 2</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route exact path="/form1" element={<Form1 />}></Route>
          <Route exact path="/form2" element={<Form2 />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

import { createTheme, ThemeProvider } from "@mui/material";

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
      <div className="App">
        <Form1 />
        <hr />
        <Form2 />
      </div>
    </ThemeProvider>
  );
}

export default App;

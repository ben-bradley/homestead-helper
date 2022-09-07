import {
  Routes,
  Route
} from "react-router-dom";

import Chicken from "./components/Livestock/Chicken/index.js"
import Rabbits from "./components/Livestock/Rabbits/index.js"
import Config from "./components/Config/index.js"

export default function HHRoutes(props) {
  const { config, setConfig } = props;

  return (
    <Routes>
      { config.show.chicken &&
        <Route exact path="/livestock/chicken" element={<Chicken />}></Route>
      }
      { config.show.rabbits &&
        <Route exact path="/livestock/rabbits" element={<Rabbits />}></Route>
      }
      <Route exact path="/config" element={<Config config={config} setConfig={setConfig} />} />
    </Routes>
  );
}

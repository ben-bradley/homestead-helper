import {
  Routes,
  Route
} from "react-router-dom";

import Home from "./components/Home.js"
import Chicken from "./components/Livestock/Chicken/index.js"
import Rabbits from "./components/Livestock/Rabbits/index.js"
import Compost from "./components/Garden/Compost/index.js"
import Harvest from "./components/Garden/Harvest/index.js"
import Config from "./components/Config/index.js"
import NotFound from "./components/NotFound.js"

export default function HHRoutes(props) {
  const { config, setConfig } = props;
  const { show } = config;

  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/homestead-helper/" element={<Home />}></Route>
      { show.livestock.chicken &&
        <Route exact path="/livestock/chicken" element={<Chicken />}></Route>
      }
      { show.livestock.rabbits &&
        <Route exact path="/livestock/rabbits" element={<Rabbits />}></Route>
      }
      { show.garden.compost &&
        <Route exact path="/garden/compost" element={<Compost />}></Route>
      }
      { show.garden.harvest &&
        <Route exact path="/garden/harvest" element={<Harvest />}></Route>
      }
      <Route exact path="/config" element={<Config config={config} setConfig={setConfig} />} />
      <Route exact path="*" element={<NotFound />} />
    </Routes>
  );
}

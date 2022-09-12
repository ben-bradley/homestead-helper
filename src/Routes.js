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
  const { show, root } = config;

  return (
    <Routes>
      <Route exact path={`/${root}`} element={<Home />} />
      <Route exact path={`/${root}/homestead-helper/`} element={<Home />} />
      { show.livestock.chicken &&
        <Route
          exact
          path={`/${root}/livestock/chicken`}
          element={<Chicken config={config} />}
        />
      }
      { show.livestock.rabbits &&
        <Route
          exact
          path={`/${root}/livestock/rabbits`}
          element={<Rabbits config={config} />}
        />
      }
      { show.garden.compost &&
        <Route
          exact
          path={`/${root}/garden/compost`}
          element={<Compost config={config} />}
        />
      }
      { show.garden.harvest &&
        <Route
          exact
          path={`/${root}/garden/harvest`}
          element={<Harvest config={config} />}
        />
      }
      <Route
        exact
        path={`/${root}/config`}
        element={<Config config={config} setConfig={setConfig} />}
      />
      <Route exact path="*" element={<NotFound />} />
    </Routes>
  );
}

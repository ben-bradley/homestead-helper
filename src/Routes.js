import {
  Routes,
  Route
} from "react-router-dom";

import Chicken from "./components/Livestock/Chicken/index.js"
import Rabbits from "./components/Livestock/Rabbits/index.js"

export default function HHRoutes() {
  return (
    <Routes>
      <Route exact path="/livestock/chicken" element={<Chicken />}></Route>
      <Route exact path="/livestock/rabbits" element={<Rabbits />}></Route>
    </Routes>
  );
}

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { useLocalStorage } from "../../../utils/storage.js";
import Pile from "./Pile.js";

/** TODO
  I need to promote the temps to their own data model rather than nesting them
  in the piles.temps[]. I should also create a crud library to handle operations
  on the various data sets
 */
const staticTemps = [
  { id: 1, pileId: 1, date: new Date("2022-09-08 00:00:00"), scale: "F", value: 100 },
  { id: 2, pileId: 1, date: new Date("2022-09-07 00:00:00"), scale: "F", value: 95 },
  { id: 3, pileId: 1, date: new Date("2022-09-06 00:00:00"), scale: "F", value: 93 },
  { id: 4, pileId: 1, date: new Date("2022-09-05 00:00:00"), scale: "F", value: 90 },
  { id: 5, pileId: 1, date: new Date("2022-09-01 00:00:00"), scale: "F", value: 90 }
];
const staticPiles = [
  { id: 1, name: "Pile #1", temps: staticTemps }
];

export default function Compost() {
  const [ piles, setPiles ] = useLocalStorage("compost.piles", staticPiles);
  const [ temps, setTemps ] = useLocalStorage("compost.temps", staticTemps);

  const getPile = (id) => piles.find((p) => p.id === id);
  const updatePile = (pile) =>
    setPiles((_piles) =>
      _piles.map((_pile) => (_pile.id !== pile.id) ? _pile : pile));

  const saveTemperature = (pileId, temp) => {
    const pile = getPile(pileId);

    pile.temps.unshift(temp);

    updatePile(pile);
  }

  return (
    <Container>
      <Box>
        <Typography variant="h3" align="center" padding={1}>Compost</Typography>
        { piles.map((pile) =>
          <Pile
            key={pile.id}
            pile={pile}
            updatePile={updatePile}
            saveTemperature={saveTemperature}
          />
        )}
        <Button>Add new pile</Button>
      </Box>
    </Container>
  );
}

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { crud, useLocalStorage } from "../../../utils/storage.js";
import { PileType, TempType } from "./types.js";
import Pile from "./Pile.js";

const staticTemps = [
  { id: 1, pileId: 1, date: new Date("2022-09-08 00:00:00"), scale: "F", value: 100 },
  { id: 2, pileId: 1, date: new Date("2022-09-07 00:00:00"), scale: "F", value: 95 },
  { id: 3, pileId: 1, date: new Date("2022-09-06 00:00:00"), scale: "F", value: 93 },
  { id: 4, pileId: 1, date: new Date("2022-09-05 00:00:00"), scale: "F", value: 90 },
  { id: 5, pileId: 1, date: new Date("2022-09-01 00:00:00"), scale: "F", value: 90 }
];
const staticPiles = [
  { id: 1, name: "Pile #1" }
];

export default function Compost() {
  const crudPiles = crud(useLocalStorage("compost.piles", staticPiles), PileType);
  const crudTemps = crud(useLocalStorage("compost.temps", staticTemps), TempType);

  return (
    <Container>
      <Box>
        <Typography variant="h3" align="center" padding={1}>Compost</Typography>
        { crudPiles.data.map((pile) =>
          <Pile
            key={pile.id}
            pile={pile}
            crudPiles={crudPiles}
            crudTemps={crudTemps}
          />
        )}
        <Button>Add new pile</Button>
      </Box>
    </Container>
  );
}

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { crud, useLocalStorage } from "../../../utils/storage.js";
import { PileType, TempType } from "./types.js";
import Pile from "./Pile.js";

import { staticPiles, staticTemps } from "./sampleData.js";

export default function Compost(props) {
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
            config={props.config}
          />
        )}
        <Button>Add new pile</Button>
      </Box>
    </Container>
  );
}

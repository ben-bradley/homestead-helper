import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Pile from "./Pile.js";

const piles = [
  {
    id: 1,
    name: "Pile #1",
    temps: [
      { date: new Date("2022-09-08"), scale: "F", value: 100 },
      { date: new Date("2022-09-07"), scale: "F", value: 95 },
      { date: new Date("2022-09-06"), scale: "F", value: 93 },
      { date: new Date("2022-09-05"), scale: "F", value: 90 }
    ]
  }
];

export default function Compost() {
  return (
    <Container>
      <Box>
        <Typography variant="h3" align="center" padding={1}>Compost</Typography>
        { piles.map((pile) => <Pile key={pile.id} pile={pile} /> )}
        <Button>Add new pile</Button>
      </Box>
    </Container>
  );
}

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import TemperatureInput from "./TemperatureInput.js";
import TemperatureTable from "./TemperatureTable.js";
import { formatDate } from "../../utils.js";

export default function Pile(props) {
  const { pile, saveTemperature } = props;
  const [ temp ] = pile.temps;

  console.log("temp:", temp);

  return (
    <Accordion sx={{ maxHeight: "75vh", overflow: "scroll" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6" sx={{ width: "33%", flexShrink: 0 }}>
          {pile.name}
        </Typography>
        <Typography sx={{ color: "text.secondary" }}>
          Latest temp: {temp.value}{temp.scale} on {formatDate(temp.date)}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={2}>
          <TemperatureInput pileId={pile.id} saveTemperature={saveTemperature} />
          <Typography variant="h6">Log</Typography>
          <TemperatureTable temps={pile.temps} />
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}

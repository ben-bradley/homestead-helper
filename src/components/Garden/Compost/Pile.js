import sortBy from "lodash/sortBy";

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
  const { crudTemps, pile, config } = props;
  const tempsForPile = crudTemps.data.filter((t) => t.pileId === pile.id);
  const sortedTempsForPile = sortBy(tempsForPile, "date").reverse();
  const [ latestTemp ] = sortedTempsForPile;

  return (
    <Accordion sx={{ maxHeight: "75vh", overflow: "scroll" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6" sx={{ width: "33%", flexShrink: 0 }}>
          {pile.name}
        </Typography>
        <Typography sx={{ color: "text.secondary" }}>
          {latestTemp.value}{latestTemp.scale} on {formatDate(latestTemp.date)}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={2}>
          <TemperatureInput
            temperatureScale={config.temperatureScale}
            pileId={pile.id}
            createTemperature={crudTemps.create}
          />
          <Typography variant="h6">Log</Typography>
          <TemperatureTable deleteTemperature={crudTemps.delete} temps={sortedTempsForPile} />
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}

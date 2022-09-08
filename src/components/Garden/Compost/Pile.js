import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import TemperatureTable from "./TemperatureTable.js";

const padZero = (value) => (value < 10) ? `0${value}` : `${value}`;

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = padZero(date.getMonth() + 1);
  const day = padZero(date.getDate());

  return `${year}-${month}-${day}`;
}

export default function Pile(props) {
  const { pile } = props;
  const [ temp ] = pile.temps;

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography sx={{ width: "33%", flexShrink: 0 }}>
          {pile.name}
        </Typography>
        <Typography sx={{ color: "text.secondary" }}>
          Latest temp: {temp.value}{temp.scale} on {formatDate(temp.date)}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <TemperatureTable temps={pile.temps} />
      </AccordionDetails>
    </Accordion>
  );
}

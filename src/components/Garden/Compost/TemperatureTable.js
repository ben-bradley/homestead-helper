import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { formatDate } from "../../utils.js";

export default function TemperatureTable(props) {
  const { temps } = props;

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="temperature table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Temp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { temps.map((temp, i) =>
            <TableRow key={i}>
              <TableCell>{formatDate(temp.date)}</TableCell>
              <TableCell>{temp.value}{temp.scale}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

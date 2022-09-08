import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { formatDate } from "../../utils.js";

export default function TemperatureTable(props) {
  const { deleteTemperature, temps } = props;

  return (
    <TableContainer>
      <Table aria-label="temperature table" size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Temp</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          { temps.map((temp, i) =>
            <TableRow key={i}>
              <TableCell>{formatDate(temp.date)}</TableCell>
              <TableCell>{temp.value}{temp.scale}</TableCell>
              <TableCell align="right">
                <IconButton aria-label="delete" onClick={() => deleteTemperature(temp.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

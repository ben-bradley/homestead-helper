import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const padZero = (value) => (value < 10) ? `0${value}` : `${value}`;

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = padZero(date.getMonth() + 1);
  const day = padZero(date.getDate());

  return `${year}-${month}-${day}`;
}

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
            <TableRow>
              <TableCell>{formatDate(temp.date)}</TableCell>
              <TableCell>{temp.value}{temp.scale}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

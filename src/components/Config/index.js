import Typography from "@mui/material/Typography";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Switch from "@mui/material/Switch";

const LIVESTOCK = [ "rabbits", "chicken", "goats" ];

export default function Config(props) {
  const { config, setConfig } = props;
  const updateShowLivestock = (update) => {
    setConfig((_config) => ({
      ..._config,
      show: {
        ..._config.show,
        livestock: {
          ..._config.show.livestock,
          ...update
        }
      }
    }));
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="HH Config">
        <TableHead>
          <TableRow>
            <TableCell align="right">Livestock</TableCell>
            <TableCell>Show</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {LIVESTOCK.map((animal, i) =>
            <TableRow key={i}>
              <TableCell align="right" style={{ textTransform: "capitalize" }}>{animal}</TableCell>
              <TableCell>
                <Switch
                  checked={config.show.livestock[animal]}
                  onChange={(e) => updateShowLivestock({ [animal]: e.target.checked })}
                  label="Show chickens?"
                  color="secondary"
                />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

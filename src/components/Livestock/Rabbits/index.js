import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Rabbits() {
  return (
    <Grid
      container
      spacing={0}
      align="center"
      justify="center"
      direction="column"
    >
      <Grid item>
        <Typography variant="h3">Rabbits!</Typography>
      </Grid>
    </Grid>
  );
}

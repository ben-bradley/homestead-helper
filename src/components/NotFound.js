import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function NotFound() {
  return (
    <Grid
      container
      spacing={0}
      align="center"
      justify="center"
      direction="column"
      style={{ marginTop: "10em" }}
    >
      <Grid item>
        <Typography variant="h3">Not found!</Typography>
      </Grid>
    </Grid>
  );
}

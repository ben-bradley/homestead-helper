import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Home() {
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
        <Typography variant="h3">Home</Typography>
      </Grid>
    </Grid>
  );
}

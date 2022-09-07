import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

export default function Config(props) {
  const { config, setConfig } = props;
  const updateShowConfig = (update) => {
    setConfig((_config) => ({
      ..._config,
      show: {
        ..._config.show,
        ...update
      }
    }));
  }

  return (
    <div>
      <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
      Config
      </Typography>
      <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
      Livestock
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          Chicken
        </Grid>
        <Grid item xs={4}>
          <Switch
            checked={config.show.chicken}
            onChange={(e) => updateShowConfig({ chicken: e.target.checked })}
            label="Show chickens?"
            color="secondary"
          />
        </Grid>
        <Grid item xs={8}>
          Rabbits
        </Grid>
        <Grid item xs={4}>
          <Switch
            checked={config.show.rabbits}
            onChange={(e) => updateShowConfig({ rabbits: e.target.checked })}
            label="Show rabbits?"
            color="secondary"
          />
        </Grid>
        <Grid item xs={8}>
          Goats
        </Grid>
        <Grid item xs={4}>
          <Switch
            checked={config.show.goats}
            onChange={(e) => updateShowConfig({ goats: e.target.checked })}
            label="Show goats?"
            color="secondary"
          />
        </Grid>
      </Grid>
    </div>
  );
}

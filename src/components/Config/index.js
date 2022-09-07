import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";

const capitalize = { textTransform: "capitalize" };

export default function Config(props) {
  const { config, setConfig } = props;

  const PAGES = [
    {
      category: "livestock",
      pages: [ "rabbits", "chicken", "goats" ]
    },
    {
      category: "garden",
      pages: [ "compost", "harvest" ]
    }
  ];

  const updateShow = (category, update) => {
    setConfig((_config) => ({
      ..._config,
      show: {
        ..._config.show,
        [category]: {
          ..._config.show[category],
          ...update
        }
      }
    }));
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      { PAGES.map(({ category, pages }) =>
        <Grid container key={category} spacing={2}>
          <Grid item xs={12}>
            <Typography align="center" variant="h2" style={{ ...capitalize }}>
              {category}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            { pages.map((page) =>
              <Grid container key={page}>
                <Grid item xs={6} style={{ ...capitalize }} align="right">
                  <Typography variant="h5">{page}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Switch
                    checked={config.show[category][page]}
                    onChange={(e) => updateShow(category, { [page]: e.target.checked })}
                    label={`Show ${page}?`}
                    color="secondary"
                  />
                </Grid>
              </Grid>
            )}
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

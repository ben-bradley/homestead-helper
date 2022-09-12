import pkg from "../package.json";

const config = {
  root: pkg.homepage.split("/").pop(),
  show: {
    livestock: {
      rabbits: true,
      chicken: true,
      goats: true
    },
    garden: {
      compost: true,
      harvest: true
    }
  },
  temperatureScale: "F"
};

console.log("config:", config);

export default config;

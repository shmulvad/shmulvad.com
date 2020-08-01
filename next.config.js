const path = require("path");
const optimizedImages = require("next-optimized-images");

module.exports = optimizedImages({
  imageTrace: {
    turdSize: 200,
    alphaMax: 0.1,
    background: "#fff",
  },
  webpack(config) {
    config.resolve.alias.images = path.join(__dirname, "images");
    return config;
  },
});

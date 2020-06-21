const withPlugins = require("next-compose-plugins");
// const optimizedImages = require("next-optimized-images");
const withSvgr = require("next-svgr");

module.exports = withPlugins([
  // [
  withSvgr,
  // optimizedImages,
  // {
  //   /* config for next-optimized-images */
  // }
  // ],
  // []
  // your other plugins here
]);

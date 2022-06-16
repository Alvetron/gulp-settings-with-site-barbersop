const gulp = require("gulp");
const path = require("./config/path");
const plugins = require("./config/plugins");

global.app = {
  gulp : gulp,
  path : path,
  plugins : plugins,
}

// tasks
const clear = require("./tasks/clear.js");
const html = require("./tasks/html.js");
const sass = require("./tasks/scss.js");
const img = require("./tasks/img.js");

exports.sass = sass;
exports.img = img;

exports.default = gulp.series(
  clear,
  gulp.parallel(html, sass, img)
)
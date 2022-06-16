global.app = {
  gulp : require("gulp"),
  path : require("./config/path"),
  plugins : require("./config/plugins"),
  browserSync : require("browser-sync").create(),
}

// tasks
const clear = require("./tasks/clear.js");
const html = require("./tasks/html.js");
const sass = require("./tasks/scss.js");
const img = require("./tasks/img.js");
const server = require("./tasks/server.js");

const watcher = () =>
{
  app.gulp.watch(`${app.path.html.watch}`, html);
  app.gulp.watch(`${app.path.scss.watch}`, sass);
  app.gulp.watch(`${app.path.img.watch}`, img);
}

exports.sass = sass;
exports.img = img;

exports.default = app.gulp.series(
  clear,
  app.gulp.parallel(html, sass, img),
  app.gulp.parallel(watcher, server),
)
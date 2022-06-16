const sass = require("gulp-sass")(require("sass"));
const cssmin = require("gulp-cssmin");
const rename = require("gulp-rename");

const scss = () =>
{
  return app.gulp.src(app.path.scss.src)
  .pipe(sass())
  .pipe(app.gulp.dest(app.path.scss.dest))
  .pipe(cssmin())
  .pipe(rename({ suffix : ".min" }))
  .pipe(app.gulp.dest(app.path.scss.dest))
}

module.exports = scss;
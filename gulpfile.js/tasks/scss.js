const sass = require("gulp-sass")(require("sass"));
const cssmin = require("gulp-cssmin");
const rename = require("gulp-rename");
const beautify = require("gulp-cssbeautify");
const groupMedia = require("gulp-group-css-media-queries");

const scss = () =>
{
  return app.gulp.src(app.path.scss.src)
  .pipe(sass())
  .pipe(groupMedia())
  .pipe(beautify({
    indent: '  ',
  }))
  .pipe(app.gulp.dest(app.path.scss.dest))
  .pipe(cssmin())
  .pipe(rename({ suffix : ".min" }))
  .pipe(app.gulp.dest(app.path.scss.dest))
  .pipe(app.browserSync.stream())

}

module.exports = scss;
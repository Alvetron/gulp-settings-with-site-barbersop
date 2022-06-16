const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");

const img = () => {
  return app.gulp.src(app.path.img.src)
  .pipe(newer(app.path.img.dest))
  .pipe(imagemin())
  .pipe(app.gulp.dest(app.path.img.dest))
  .pipe(app.browserSync.stream())
}

module.exports = img;

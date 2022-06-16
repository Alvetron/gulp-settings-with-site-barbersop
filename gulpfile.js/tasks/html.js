const htmlMin = require("gulp-htmlmin");
const fileInclude = require("gulp-file-include");


const html = () =>
{
  return app.gulp.src(app.path.html.src)
  .pipe(app.plugins.plumber({
    errorHandler: app.plugins.notify.onError(error => ({
        title: "HTML",
        message: error.message
    }))
  }))
  .pipe(fileInclude())
  .pipe(htmlMin({ collapseWhitespace: true }))
  .pipe(app.gulp.dest(app.path.html.dest))
  .pipe(app.browserSync.stream())
}

module.exports = html;
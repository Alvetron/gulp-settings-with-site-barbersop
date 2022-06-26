const js = () =>
{
  return app.gulp.src(app.path.js.src)
  .pipe(app.gulp.dest(app.path.js.dest))
  .pipe(app.browserSync.stream())
}

module.exports = js;
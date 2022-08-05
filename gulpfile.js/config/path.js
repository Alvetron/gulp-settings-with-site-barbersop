const buildPath = "./public";
const srcPath = "./source";

module.exports = {
  buildPath : buildPath,
  html : {
    src : srcPath + "/*.html",
    watch : srcPath + "/**/*.html",
    dest : buildPath + "/",
  },
  scss : {
    src : srcPath + "/assets/sass/*.{scss,css}",
    watch : srcPath + "/assets/sass/**/*.scss",
    dest : buildPath + "/assets/css"
  },
  img : {
    src : srcPath + "/assets/images/**/*.{png,jpeg,jpg,svg}",
    watch : srcPath + "/assets/images/**/*.{png,jpeg,jpg,svg}",
    dest : buildPath + "/assets/images"
  },
  js : {
    src : srcPath + "/assets/js/**/*.js",
    watch : srcPath + "/assets/js/**/*.js",
    dest : buildPath + "/assets/js"
  }
}
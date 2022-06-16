const del = require("del");

const clear = () => {
  return del(app.path.buildPath)
}

module.exports = clear;
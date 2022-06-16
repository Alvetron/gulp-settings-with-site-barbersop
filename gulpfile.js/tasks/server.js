const server = () => {
    app.browserSync.init({
        server: {
            baseDir: app.path.buildPath
        }
    });
}

module.exports = server;
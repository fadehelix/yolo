module.exports = function() {
    return this.gulp.src('./scss/**/*.scss')
        .pipe(this.opts.styleGuide.generate({
            title: 'YOLO Style Guide',
            server: true,
            rootPath: this.opts.styleGuideOutputPath,
            overviewPath: 'README.md'
        }))
        .pipe(this.gulp.dest(this.opts.styleGuideOutputPath));
};
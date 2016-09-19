module.exports = function() {
    var sass = require("gulp-sass");
    return this.gulp.src('./scss/style.scss')
        .pipe(sass(this.opts.sassOptions).on('error', sass.logError))
        .pipe(this.opts.styleGuide.applyStyles())
        .pipe(this.gulp.dest(this.opts.styleGuideOutputPath));
};
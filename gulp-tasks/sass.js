module.exports = function () {
    var sass = require("gulp-sass");
    var sourcemaps = require('gulp-sourcemaps');
    var autoprefixer = require('gulp-autoprefixer');
    var concat = require('gulp-concat');
    var merge = require('merge-stream');

    return this.gulp.src('./scss/**/*.scss')
            .pipe(sourcemaps.init())
            .pipe(sass(this.opts.sassOptions).on('error', sass.logError))
            .pipe(autoprefixer(this.opts.autoprefixerOptions))
            .pipe(concat('style.css'))
            .pipe(sourcemaps.write('../maps'))
            .pipe(this.gulp.dest('./css'));
};
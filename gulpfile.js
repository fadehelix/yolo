/**
 * @file
 * Gulp configuration.
 */

var gulp = require("gulp");
var sass = require("gulp-sass");
var styleGuide = require('sc5-styleguide');
var styleGuideOutputPath = 'styleguide';
//Additional configuration and import node libraries
var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded',
    includePaths: require('node-bourbon').includePaths,
    includePaths: require('node-neat').includePaths
}
// Show in browser inspector in which SCSS file and line rule is defined.
var sourcemaps = require('gulp-sourcemaps');
var shell = require('gulp-shell');
// Automatically create browser-related prefixes in CSS rules.
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var merge = require('merge-stream');

var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

// Sass task.
gulp.task('sass', function() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('./css'));
});

//Style Guide generator
gulp.task('styleguide:generate', function() {
    return gulp.src('./scss/**/*.scss')
    .pipe(styleGuide.generate({
        title: 'YOLO Style Guide',
        server: true,
        rootPath: styleGuideOutputPath,
        overviewPath: 'README.md'
    }))
    .pipe(gulp.dest(styleGuideOutputPath));
});

gulp.task('styleguide:applystyles', function() {
  return gulp.src('main.scss')
  .pipe(sass({
      errLogToConsole: true
  }))
  .pipe(styleGuide.applyStyles())
  pipe(gulp.dest(styleGuideOutputPath));
});

// Process JS files and return the stream.
gulp.task('js', function() {
  return gulp.src('js/*js')
    .pipe(gulp.dest('js'));
});

// Default task to be run with `gulp`.
gulp.task('default', ['sass', 'styleGuide', 'js'], function() {
  gulp.watch("scss/**/*.scss", ['sass', 'styleGuide']);
  gulp.watch("js/*.js", ['js']);
});

gulp.task('styleGuide', ['styleguide:generate', 'styleguide:applystyles']);

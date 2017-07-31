/**
 * @file
 * Gulp configuration.
 */

var gulp = require("gulp"),
    sass = require("gulp-sass"),
    normalize = require("node-normalize-scss");
//Additional configuration and import node libraries
var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded',
    includePaths: [].concat(normalize)
};
// Show in browser inspector in which SCSS file and line rule is defined.
var sourcemaps = require('gulp-sourcemaps');
var shell = require('gulp-shell');
// Automatically create browser-related prefixes in CSS rules.
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var merge = require('merge-stream');
var spritesmith = require('gulp.spritesmith');
var svgSprite = require("gulp-svg-sprites");

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

//Generate .png sprite
gulp.task('sprite', function() {
    var spriteData = gulp.src('images/sprites/*.png').pipe(spritesmith({
      imgName: 'sprite.png',
      imgPath: '../images/sprite.png',
      cssName: 'sprite.scss'
    }));
    return spriteData.pipe(gulp.dest('images/'));
});

//Generate svg sprite
gulp.task('sprite-svg', function () {
  return gulp.src('images/sprites-svg/*.svg')
    .pipe(svgSprite({
      preview: false,
      templates: {
        scss: require("fs").readFileSync("./tmpl/sprite-svg.scss", "utf-8")
      },
      cssFile: "../scss/_sprite-svg.scss",
      svg: {
        sprite: "./sprite.svg"
      }
    }))
    .pipe(gulp.dest("images"));
});

// Process JS files and return the stream.
gulp.task('js', function() {
  return gulp.src('js/*js')
    .pipe(gulp.dest('js'));
});

// Default task to be run with `gulp`.
gulp.task('default', ['sass', 'js'], function() {
  gulp.watch("scss/**/*.scss", ['sass']);
  gulp.watch("js/*.js", ['js']);
});

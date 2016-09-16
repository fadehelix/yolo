/**
 * @file
 * Gulp configuration.
 */
//var sass = require("gulp-sass");
//Additional configuration and import node libraries
var gulp = require("gulp");
var shell = require('gulp-shell');


var styleGuideOutputPath = 'styleguide';
var styleGuide = require('sc5-styleguide');

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded',
    includePaths: require('node-bourbon').includePaths,
    includePaths: require('node-neat').includePaths
};

var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

//Load tasks with options
require('gulp-task-loader')({
    styleGuide: styleGuide,
    styleGuideOutputPath: styleGuideOutputPath,
    sassOptions: sassOptions,
    autoprefixerOptions: autoprefixerOptions
});

// Default task to be run with `gulp`.
gulp.task('default', ['sass', 'styleGuide', 'js'], function() {
  gulp.watch("scss/**/*.scss", ['sass', 'styleGuide']);
  gulp.watch("js/*.js", ['js']);
});

gulp.task('styleGuide', ['styleguide:generate', 'styleguide:applystyles']);

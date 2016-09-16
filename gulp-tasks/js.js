module.exports = function() {
    // Process JS files and return the stream.
   return this.gulp.src('js/*js')
    .pipe(this.gulp.dest('js'));
};
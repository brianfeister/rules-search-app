var gulp = require('gulp');
var yaml = require('gulp-yaml');
var replace = require('gulp-replace');

// convert
gulp.task('yaml-to-json', function(){
  gulp.src('rules/src/*.yml')
    .pipe(yaml({
        space: 2
    }))
    // replaces newlines from YAML "foo : |" linebreaks
    .pipe(replace('\\n', '<br />'))
    .pipe(gulp.dest('rules/dist'))
});

gulp.task('default', ['yaml-to-json']);

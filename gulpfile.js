var path = require('path');
var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({ browsers: ['last 4 versions', 'iOS>=7', 'android >= 4.0', 'and_uc >= 9.9'] });


gulp.task('less', function () {
  return gulp.src('./less/turmgel.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ],
      plugins: [autoprefix]
    }))
    .pipe(gulp.dest('./css'))
});

gulp.task('watch', function() {
	gulp.watch('./less/*.less', ['less']); // Watch all the .less files, then run the less task
});


gulp.task('default', ['less']);
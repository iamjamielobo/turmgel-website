var path = require('path');
var gulp = require('gulp');
var less = require('gulp-less');
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


gulp.task('default', ['less']);
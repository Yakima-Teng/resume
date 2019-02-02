const gulp = require('gulp')

const { join, browserSync } = require('../utils')

module.exports = () => {
  return gulp.src(join('/src/img/*.*'))
    .pipe(gulp.dest(join('/dist/img')))
    .pipe(browserSync.stream())
}

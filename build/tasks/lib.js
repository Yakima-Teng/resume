const gulp = require('gulp')

const { join } = require('../utils')

module.exports = () => {
  return gulp.src(join('/src/lib/**/*.*'))
    .pipe(gulp.dest(join('/dist/lib')))
}

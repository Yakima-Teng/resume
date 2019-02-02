const gulp = require('gulp')

const { join } = require('./utils')

const taskEJS = require('./tasks/ejs')
const taskImg = require('./tasks/img')
const taskJS = require('./tasks/js')
const taskSass = require('./tasks/sass')
const taskServe = require('./tasks/serve')

const start = gulp.series(
  gulp.parallel(taskEJS, taskSass, taskImg, taskJS),
  taskServe
)

start()

gulp.watch([join('/src/index.ejs')], taskEJS)
gulp.watch([join('/src/css/*.scss')], taskSass)
gulp.watch([join('/src/img/*.*')], taskImg)
gulp.watch([join('/src/js/*.js')], taskJS)

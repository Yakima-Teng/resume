const gulp = require('gulp')

const taskEJS = require('./tasks/ejs')
const taskSass = require('./tasks/sass')
const taskImg = require('./tasks/img')
const taskJS = require('./tasks/js')

const build = gulp.parallel(
  taskEJS,
  taskSass,
  taskImg,
  taskJS
)

build()

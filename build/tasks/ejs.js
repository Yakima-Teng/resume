const gulp = require('gulp')
const log = require('fancy-log')
const ejs = require('gulp-ejs')
const htmlmin = require('gulp-htmlmin')
const gulpif = require('gulp-if')

const { isProduction, join, browserSync } = require('../utils')

module.exports = () => {
  // 需要先删除require缓存的数据，否则renderData的数据是不会随着config.js中renderData的改变而改变的
  delete require.cache[require.resolve('../../config')]
  const { renderData } = require('../../config')
  return gulp.src(join('/src/**/*.ejs'))
    .pipe(ejs(renderData, {}, { ext: '.html' })).on('error', log)
    .pipe(gulpif(isProduction, htmlmin({ collapseWhitespace: true })))
    .pipe(gulp.dest(join('/dist')))
    .pipe(browserSync.stream())
}

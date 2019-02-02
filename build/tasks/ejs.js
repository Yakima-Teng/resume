const gulp = require('gulp')
const log = require('fancy-log')
const ejs = require('gulp-ejs')
const htmlmin = require('gulp-htmlmin')
const gulpif = require('gulp-if')

const { isProduction, join, browserSync } = require('../utils')
const { renderData } = require('../../config')

module.exports = () => {
  return gulp.src(join('/src/**/*.ejs'))
    .pipe(ejs(renderData, {}, { ext: '.html' })).on('error', log)
    .pipe(gulpif(isProduction, htmlmin({ collapseWhitespace: true })))
    .pipe(gulp.dest(join('/dist')))
    .pipe(browserSync.stream())
}

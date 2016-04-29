'use strict'

var path = require('path')
var gulp = require('gulp')
var gutil = require('gulp-util')
var watch = require('gulp-watch')
var babel = require('gulp-babel')
var sourcemaps = require('gulp-sourcemaps')
var relativeSourcemapsSource = require('gulp-relative-sourcemaps-source')
var newer = require('gulp-newer')
var print = require('gulp-print')
var plumber = require('gulp-plumber')

function errorHandler (err) {
  if (err.message && err.stack) { // babel error
    gutil.log(err.message)
    gutil.log(err.stack)
  } else {
    gutil.log(err)
  }
}

/**
 * .babelrc 파일을 이용하여 특정 디렉토리의 파일들을 babel 을 적용하여 dstPath 에 생성한다.
 * @param srcGlob {string}
 * @param dstPath {string}
 * @param [doWatch=false] {boolean}
 * @return {*}
 */
function babelTask (srcGlob, dstPath, doWatch) {
  return gulp.src(srcGlob)
    .pipe(plumber({ errorHandler }))
    .pipe(doWatch ? watch(srcGlob) : gutil.noop())
    .pipe(newer(dstPath))
    .pipe(sourcemaps.init())
    .pipe(babel({ 'extends': path.join(__dirname, '.babelrc') }))
    .pipe(relativeSourcemapsSource({ dest: dstPath }))
    .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: '.' }))
    .pipe(plumber.stop())
    .pipe(gulp.dest(dstPath))
    .pipe(print(filename => {
      console.log(`Generated => ${filename}`)
    }))
}

gulp.task('compile', () => babelTask('src/**/*.js', 'dist', false))
gulp.task('compile:watch', () => babelTask('src/**/*.js', 'dist', true))

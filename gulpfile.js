'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');

sass.compiler = require('node-sass');

gulp.task('sass',  () => {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('minify-css', () => {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('sass:watch', () => {
  gulp.watch('./sass/**/*.scss', gulp.series('sass'));
});

gulp.task('minify-css:watch', () => {
  gulp.watch('css/*.css', gulp.series('minify-css'));
});


gulp.task('default', gulp.series('minify-css:watch', 'sass:watch'));
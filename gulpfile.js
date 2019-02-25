'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
let babel = require('gulp-babel');
let uglify = require('gulp-uglify');
let pump = require('pump');
let concat = require('gulp-concat');

sass.compiler = require('node-sass');

gulp.task('sass',  () => {
  return gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'));
});

gulp.task('sassSingle',  () => {
  return gulp.src('src/sass/single/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css/single'));
});

gulp.task('scripts', function() {
  return gulp.src('src/css/*.css')
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('src/css/concat'));
});

gulp.task('minify-css', () => {
  return gulp.src('src/css/concat/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('minify-cssSingle', () => {
  return gulp.src('src/css/single/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/styles/single'));
});

gulp.task('babel', () =>
    gulp.src('src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('src/js_babel'))
);

gulp.task('compress', function (cb) {
  pump([
        gulp.src('src/js_babel/*.js'),
        uglify(),
        gulp.dest('dist/js')
    ],
    cb
  );
});

gulp.task('watch', () => {
  gulp.watch('src/sass/*.scss', gulp.series('sass')); 
  gulp.watch('src/css/*.css', gulp.series('scripts'));
  gulp.watch('src/css/conact/*.css', gulp.series('minify-css'));
  gulp.watch('src/sass/single/*.scss', gulp.series('sassSingle')); 
  gulp.watch('src/css/single/*.css', gulp.series('minify-cssSingle'));
  gulp.watch('src/js/*.js', gulp.series('babel'));
  gulp.watch('src/js_babel/*.js', gulp.series('compress'));
});




gulp.task('default', gulp.series('sass', 'scripts', 'minify-css', 'sassSingle', 'minify-cssSingle', 'babel', 'compress', 'watch'));
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
  gulp.watch('src/css/*.css', gulp.series('minify-css'));
  gulp.watch('src/js_babel/*.js', gulp.series('compress'));
});




gulp.task('default', gulp.series('sass', 'scripts', 'minify-css', 'babel', 'compress', 'watch'));
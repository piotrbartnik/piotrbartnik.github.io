'use strict';

let gulp = require('gulp');
let babel = require('gulp-babel');
let uglify = require('gulp-uglify');
let pump = require('pump');


gulp.task('babel', () =>
    gulp.src('js/*.js')
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
  gulp.watch('js/*.js', gulp.series('babel'));
  gulp.watch('src/js_babel/*.js', gulp.series('compress'));  
});




gulp.task('default', gulp.series('babel', 'compress', 'watch'));
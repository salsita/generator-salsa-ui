var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    less = require('gulp-less'),
    nodemon = require('gulp-nodemon'),
    sourcemaps = require('gulp-sourcemaps'),
    minifyCss = require('gulp-minify-css'),
    livereload = require('gulp-livereload');

gulp.task('less', function() {
  gulp.src('public/src/less/style.less')
    .pipe(sourcemaps.init())
    .pipe(less({compress: true}))
    .pipe(autoprefixer())
    .pipe(minifyCss({keepBreaks: false}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/dist'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();

  gulp.watch('public/src/less/**/*.less', ['less']);
  gulp.watch('public/*.html').on('change', livereload.changed);
});

gulp.task('develop', function() {
  nodemon({
    script: 'server.js'
  });
});

gulp.task('default', ['less', 'watch', 'develop']);

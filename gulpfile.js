'use strict';

var gulp    = require('gulp');
var rename  = require('gulp-rename');
var uglify  = require('gulp-uglify');
var coffee  = require('gulp-coffee');
var include = require("gulp-include");

gulp.task('js', function () {
  gulp.src("src/localsignal-maps.coffee")
    .pipe(include())
    .pipe(coffee({bare: true}))
    .pipe(uglify())
    .pipe(rename(function (path) {
      path.basename += ".min";
    }))
    .pipe(gulp.dest("dist"));

  gulp.src("src/localsignal-maps.coffee")
    .pipe(include())
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest("dist"));
});

gulp.task('default', ['js'] , function() {
  gulp.watch(['src/*.coffee'], ['js']);
});

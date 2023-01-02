'use strict';

let gulp = require('gulp');
let browserify = require('gulp-browserify');
let uglify = require('gulp-uglify-es').default;
let rename = require('gulp-rename');
let render = require('gulp-nunjucks-render');

gulp.task('summon-sim', () => {
  return gulp.src('./js/summon-simulator/main.js')
      .pipe(browserify())
      .pipe(uglify())
      .pipe(rename('app.js'))
      .pipe(gulp.dest('./summon-simulator'));
});

gulp.task('render-ss', () => {
  return gulp.src('templates/pages/summon-simulator.html')
      .pipe(render({
        path: ['templates/partials/', 'templates/macros/']
      }))
      .pipe(rename('index.html'))
      .pipe(gulp.dest('./summon-simulator'));
});

gulp.task('build', [
    'summon-sim',
    'render-ss',
  ]);

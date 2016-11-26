var gulp = require('gulp');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');

gulp.task('build:server', function() {
    var tsProject = ts.createProject('server/tsconfig.json');
    var tsResult = gulp.src('server/**/*.ts')
            .pipe(sourcemaps.init())
            .pipe(tsProject());
    return tsResult.js
            // .pipe(concat('server.js'))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('server/dist'));
});

gulp.task('watch', function() {
    gulp.watch('server/**/*.ts', ['build:server']);
});

gulp.task('build', function(callback) {
    runSequence('build:server', callback);
});

gulp.task('serve', ['build:server', 'watch'], function() {
    livereload.listen();
    nodemon({
        script: 'server/dist/server.js',
        ext: 'js',
    }).on('restart', function() {
        setTimeout(function() {
            livereload.changed();
        },  500);
    });
});

gulp.task('default', ['build']);

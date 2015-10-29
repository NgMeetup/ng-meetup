'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
var compass = require('gulp-compass');
var del = require('del');
var bower = require('gulp-bower');
var shell = require('gulp-shell');

gulp.task('connect', function () {
    connect.server({
        root: 'app',
        port: 8080,
        livereload: true
    });
});

gulp.task('sass', function () {
    gulp.src('./app/**/*.scss')
        .pipe(compass({
            config_file: './app/assets/config.rb',
            css: './app/assets/css',
            sass: './app/assets/sass'
        }))
        .pipe(gulp.dest('temp'))
        .pipe(connect.reload());
});

gulp.task('html', function () {
    gulp.src('./app/**/*.html')
        .pipe(connect.reload());
});

gulp.task('js', function () {
    gulp.src('./app/**/*.js')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./app/**/*.html'], ['html', 'cordova:copy']);
    gulp.watch(['./app/**/*.js'], ['js', 'cordova:copy']);
    gulp.watch(['./app/**/*.scss'], ['sass', 'cordova:copy']);
});

gulp.task('cordova:clean', function () {
    return del(['cordova/www/*']);
});

gulp.task('cordova:copy', function () {
    gulp.src('./app/**', {base: './app'})
        .pipe(gulp.dest('./cordova/www/'));
});

gulp.task('ionic:prepare', shell.task([
    'cd cordova; ionic platform add android',
    'cd cordova; ionic platform add ios',
    'cd cordova; ionic plugin add com.ionic.keyboard@1.0.4',
    'cd cordova; ionic plugin add cordova-plugin-console@1.0.1',
    'cd cordova; ionic plugin add cordova-plugin-device@1.0.1',
    'cd cordova; ionic plugin add cordova-plugin-splashscreen@2.1.0',
    'cd cordova; ionic plugin add cordova-plugin-whitelist@1.0.0',
    'cd cordova; ionic plugin add org.apache.cordova.inappbrowser@0.6.0',
    'cd cordova; ionic plugin add org.apache.cordova.statusbar@0.1.10'
]));

gulp.task('bower', function () {
    return bower()
        .pipe(gulp.dest('app/bower_components'))
});

gulp.task('bower:clean', function () {
    return del([
        'app/bower_components/angular/**/*',
        '!app/bower_components/angular/angular.min.js',

        'app/bower_components/bootstrap/**/*',
        '!app/bower_components/bootstrap/dist',
        '!app/bower_components/bootstrap/dist/css',
        '!app/bower_components/bootstrap/dist/css/bootstrap.css',
        '!app/bower_components/bootstrap/fonts',
        '!app/bower_components/bootstrap/fonts/**',

        'app/bower_components/jquery/**/*',
        '!app/bower_components/jquery/dist',
        '!app/bower_components/jquery/dist/jquery.min.js',

        'app/bower_components/ngCordova/**/*',
        '!app/bower_components/ngCordova/dist',
        '!app/bower_components/ngCordova/dist/ng-cordova.min.js',

        'app/bower_components/ngmap/**/*',
        '!app/bower_components/ngmap/build',
        '!app/bower_components/ngmap/build/scripts',
        '!app/bower_components/ngmap/build/scripts/ng-map.min.js',

        'app/bower_components/ngstorage/**/*',
        '!app/bower_components/ngstorage/ngStorage.min.js'
    ]);
});

gulp.task('prepare', ['bower', 'ionic:prepare']);
gulp.task('cordova', ['bower:clean', 'cordova:clean', 'cordova:copy']);
gulp.task('start', ['connect', 'watch', 'sass']);
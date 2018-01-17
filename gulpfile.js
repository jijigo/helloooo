// 引用 gulp plugin
var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

// 建立預設 gulp task
gulp.task('default', function () {
    console.log('hello');
});

// compiler scss
gulp.task('sass', function () {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

// 連接伺服器
gulp.task('connect', function() {
    connect.server();
});

gulp.task('default', ['connect']);
// 引用 gulp plugin
var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var gulpLivereload = require('gulp-livereload');  // 載入 gulp-livereload

// 建立預設 gulp task
gulp.task('default', function () {
    console.log('hello');
});

gulp.task('watch', function () {
    gulpLivereload.listen();
    // gulp.watch('javascript/original/*.js', ['scripts']);
    gulp.watch('scss/**/*.scss', ['sass']);
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
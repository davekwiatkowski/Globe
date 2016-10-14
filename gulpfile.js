var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    minify = require('gulp-minify-css'),
    prefix = require('gulp-autoprefixer');

/**
 * Scripts task
 * Uglifies, Dest
 */
gulp.task('scripts', function () {
    gulp.src('js/*.js')
        .pipe(livereload());
});

gulp.task('styles', function () {
    gulp.src('sass/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed',
            sourceComments: 'map'
        }).on('error', sass.logError))
        .pipe(prefix(
            'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'
        ))
        .pipe(minify())
        .pipe(gulp.dest('./css/'))
        .pipe(livereload());
});

/**
 * HTML Task
 * Dest
 */
gulp.task('html', function () {
    gulp.src('./index.html')
        .pipe(livereload());
});

/**
 * Watch Task
 * Watches JS & CSS
 */
gulp.task('watch', function () {
    livereload.listen();

    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('sass/**/*.scss', ['styles']);
    gulp.watch('./*.html', ['html']);
});

gulp.task('default', ['html', 'scripts', 'styles', 'watch']);
var concat = require('gulp-concat')
var rename = require('gulp-rename')
var uglify = require('gulp-uglify')
var pug = require('gulp-pug')
var sass = require('gulp-sass')
var image = require('gulp-image')
var gulp = require('gulp')
var child = require('child_process')
var fs = require('fs')
var clean = require('gulp-clean')

gulp.task('js', () => {
    return gulp.src('./src/js/**/*.js')
        .pipe(concat('main.js'))
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest('dest/js'))
        .pipe(uglify())
        .pipe(gulp.dest('dest/js'))
})

gulp.task('views', () => {
    return gulp.src('./src/views/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('dest'))
})

gulp.task('sass', () => {
    return gulp.src('./src/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dest/css'))
})

gulp.task('images', () => {
    return gulp.src('./src/images/**/*')
        .pipe(gulp.dest('./dest/images'))
})

gulp.task('watch', () => {
    gulp.watch('./src/scss/**/*.scss', ['sass'])
    gulp.watch('./src/js/**/*.js', ['js'])
    gulp.watch('./src/images/**/*', ['images'])
    gulp.watch('./src/views/**/*.pug', ['views'])
})

gulp.task('connect', () => {
    var server = child.spawn('node', ['server.js'])
    var log = fs.createWriteStream('server.log', { flags: 'a' })
    server.stdout.pipe(log)
    server.stderr.pipe(log)
})

gulp.task('default', ['connect', 'js', 'sass', 'views', 'images', 'watch'])

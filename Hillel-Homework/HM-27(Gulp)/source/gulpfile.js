

const gulp = require('gulp')
const uglify = require('gulp-uglify')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')

function minCSS() {
    return gulp.src('css/*.css')
        .pipe(cleanCSS())
        .pipe(rename({extname: '.min.css'}))
        .pipe(gulp.dest('dist/css'))
}

function minJS() {
    return gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('dist/js'))
}

exports.minCSS = minCSS
exports.minJS = minJS
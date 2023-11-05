const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');


function compilaSass() {
    return gulp.src('./src/styles/main.scss').pipe(sourcemaps.init()).pipe(sass({
        outputStyle: 'compressed'
    })).pipe(sourcemaps.write('./maps')).pipe(gulp.dest('./dist/styles/'));
};

function comprimeJs() {
    return gulp.src('./src/js/*.js').pipe(uglify()).pipe(gulp.dest('./dist/js'));
};

function comprimeImage() {
    return gulp.src('./src/img/*').pipe(imagemin()).pipe(gulp.dest('./dist/img'))
};


exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(compilaSass, comprimeJs))
};

exports.default = gulp.parallel(compilaSass, comprimeJs, comprimeImage);


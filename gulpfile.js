var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var csslint = require('gulp-csslint');

gulp.task('scripts', function() {
    return gulp.src('') //Add which files to concaternate here
      .pipe(concat('main.js'))
		.pipe(rename({suffix: '.min'}))
        .pipe(uglify())
      	.pipe(gulp.dest('build/js'));
});

gulp.task('autoprefix', function () {
    return gulp.src('') //Add which files to run on
        .pipe(autoprefixer({
            browsers: [''], //Add which browsers you support
            cascade: false
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('sass', function() {
    return gulp.src('') //Add which files to compile
        .pipe(rename({suffix: '.min'}))
        .pipe(sass({style: 'compressed'}))
        .pipe(gulp.dest('build/css'));
});

gulp.task('css', function() {
  gulp.src('') //Add which files to run on
    .pipe(csslint())
    .pipe(csslint.reporter());
});



gulp.task('default', ['scripts', 'autoprefix', 'sass', 'css']);
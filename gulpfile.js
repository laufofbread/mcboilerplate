/*!
 * gulp
 * $ npm install gulp-concat gulp-uglify gulp-rename gulp-ruby-sass gulp-minify-css gulp-notify gulp-autoprefixer gulp-livereload gulp-watch gulp-imagemin gulp-cache --save-dev
*/

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	sass = require('gulp-ruby-sass'),
	minifycss = require('gulp-minify-css'),
	notify = require('gulp-notify'),
	autoprefixer = require('gulp-autoprefixer'),
	livereload = require('gulp-livereload'),
	watch = require('gulp-watch'),
	imagemin = require('gulp-imagemin'),
	cache = require('gulp-cache')
	

gulp.task('scripts', function() {
    return gulp.src([
    	'public_html/js/vendor/slick.js',
		'public_html/js/plugins.js',
		'public_html/js/app.js'
    ]) //Add which files to concaternate here
      .pipe(concat('main.js'))
		.pipe(rename({suffix: '.min'}))
        .pipe(uglify())
      	.pipe(gulp.dest('public_html/dist/'))
		.pipe(notify({ message: 'Scripts task complete' }))
		.pipe(livereload());
});


gulp.task('styles', function() {
	return sass([
		'public_html/css/main.scss'
	])
	.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
	.pipe(gulp.dest('public_html/css/'))
	.pipe(rename({ suffix: '.min' }))
	.pipe(minifycss())
	.pipe(gulp.dest('public_html/dist/'))
	.pipe(notify({ message: 'Styles task complete' }))
	.pipe(livereload());
});

// Images
gulp.task('images', function() {
	return gulp.src('public_html/img/**/*')
		.pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
		.pipe(gulp.dest('public_html/img/'))
	.pipe(notify({ message: 'Images task complete' }));
});


gulp.task('watch', function() {

	// Watch .scss files
	gulp.watch('public_html/css/*.scss', ['styles']);

	// Watch .js files
	gulp.watch('public_html/js/**/*.js', ['scripts']);
	

	// Create LiveReload server
	livereload.listen();

	// Watch any files in dist/, reload on change
	gulp.watch(['dist/**']).on('change', livereload.changed);

});


gulp.task('default', ['watch', 'scripts', 'styles', 'images']);
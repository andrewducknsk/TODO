let gulp = require('gulp'),
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber'),
	postcss = require('gulp-postcss'),
	prefixer = require('autoprefixer'),
	minifycss = require('gulp-csso'),
	rename = require('gulp-rename');

gulp.task('style', function() {
	gulp
		.src('src/sass/**/*.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(postcss([prefixer()]))
		.pipe(gulp.dest('src/css'))
		.pipe(minifycss())
		.pipe(rename('main.min.css'))
		.pipe(gulp.dest('src/css'));
});

gulp.task('normalize', function() {
	gulp
		.src('css/**/normalize.css')
		.pipe(minifycss())
		.pipe(rename('normalize.min.css'))
		.pipe(gulp.dest('build/css'));
});

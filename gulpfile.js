var gulp = require('gulp');
var browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));



gulp.task('sass', function() {
    return gulp.src("app/scss/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});



gulp.task('watch', async function(){
	  browserSync.init({
        server: "./app"
    });
  gulp.watch('app/scss/**/*.scss',gulp.series( ['sass'])); 
   gulp.watch("app/*.html").on('change', browserSync.reload);
  // Other watchers
})
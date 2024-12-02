const gulp = require('gulp');
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();


gulp.task('pug', function () {
    return gulp.src('#source/pug/index.pug')
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest('./')) 
        .pipe(browserSync.stream());
});


gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('#source/pug/**/*.pug', gulp.series('pug'));
    gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.series('pug', 'serve'));

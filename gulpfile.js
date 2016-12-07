/**
 * Created by alexrewrew on 15.11.16.
 */
/* команди npm для gulp
 npm install gulp-sass --save-dev
 npm install browser-sync --save-dev
 */


var gulp = require('gulp'), //ініціалізація gulp
    sass = require('gulp-sass'), //ініціалізація sass
    browserSync = require('browser-sync'),
    uncss = require('gulp-uncss'); //ініціалізація browser-sync

// Завдання для компіляції sass
gulp.task('sass', function () {
    return gulp.src('app/scss/*.scss') //пошук файлів з розширенням scss
        .pipe(sass().on('error', sass.logError)) //вивід помилок
        .pipe(gulp.dest('app/css')) //вивід зкомпільованого файлу до теки css
        .pipe(browserSync.reload({ // перезавантажувати синхронізатор при кожній зміні
            stream: true
        }))
});

//завдання для browser-sync
gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: 'app' //робоча папка для перезавантаження сторінки
        }
    })
});

//

gulp.task('default', function () {
    return gulp.src(['app/css/volta.css', 'app/css/bootstrap.css'])
        .pipe(uncss({
            html: ['app/**/*.html']
        }))
        .pipe(gulp.dest('dist/css'));
});

//слідкування за змінами у проекті
gulp.task('watch', ['browserSync', 'sass'], function () { //запуск browser-sync та sass відслідковувачів
    gulp.watch('app/scss/**/*.scss', ['sass']); //пошук scss файлів
    gulp.watch('app/*.html', browserSync.reload); //пошук html файлів
    gulp.watch('app/js/**/*.js', browserSync.reload); //пошук js файлів
});
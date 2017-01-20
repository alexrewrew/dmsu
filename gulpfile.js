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
    uncss = require('gulp-uncss'),
    rigger = require('gulp-rigger'); //ініціалізація browser-sync

// Завдання для компіляції sass
gulp.task('sass', function () {
    return gulp.src('app/scss/volta.scss') //пошук файлів з розширенням scss
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
    return gulp.src(['app/css/volta.css'])
        .pipe(uncss({
            html: ['app/**/*.html']
        }))
        .pipe(gulp.dest('app/css/volta'));
});

//
var concat = require('gulp-concat');

gulp.task('scripts', function() {
    return gulp.src(['app/package/chosen/chosen.jquery.js', 'app/js/bootstrap.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('app/js'));
});

/*rigger*/

gulp.task('rigger', function () {
    gulp.src(['app/html/*.html'])
    /*gulp.src(['app/html/about.html'])*/
        .pipe(rigger())
        .pipe(gulp.dest('app/'));
});

//слідкування за змінами у проекті
gulp.task('watch', ['rigger','browserSync', 'sass'], function () { //запуск browser-sync та sass відслідковувачів
    gulp.watch('app/scss/**/*.scss', ['sass']); //пошук scss файлів
    gulp.watch('app/html/*.html', ['rigger']); //пошук html файлів
    gulp.watch('app/*.html', browserSync.reload); //пошук html файлів
    gulp.watch('app/js/**/*.js', browserSync.reload); //пошук js файлів
});
var gulp = require('gulp'); //ініціалізація gulp
var sass = require('gulp-sass'); //ініціалізація sass
var browserSync = require('browser-sync'); //автоматичне перезавантаження сторінки
var rigger = require('gulp-rigger');
var concat = require('gulp-concat'); //конкатинація
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-html-minifier');

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

//concat
gulp.task('scripts', function () {
    return gulp.src(['app/js/scripts/bootstrap.js', 'app/package/chosen/chosen.jquery.js', 'app/package/slick-carousel/slick/slick.js', 'app/js/scripts/menu.js', 'app/js/scripts/scripts.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('app/js'));
});

//rigger
gulp.task('rigger', function () {
    gulp.src(['app/html/*.html'])
        .pipe(rigger())
        .pipe(gulp.dest('app/'));
});

/////////////////

//uglify
gulp.task('compress', function () {
    return gulp.src('app/js/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

//minify
gulp.task('minify-css', function () {
    return gulp.src('app/css/volta.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
});

//html minify
gulp.task('minify-html', function () {
    gulp.src('app/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'))
});

//build
gulp.task('build', ['compress', 'minify-css', 'minify-html'], function () {

});


//слідкування за змінами у проекті
gulp.task('watch', ['scripts', 'rigger', 'browserSync', 'sass'], function () { //запуск browser-sync та sass відслідковувачів
    gulp.watch('app/scss/**/*.scss', ['sass']); //пошук scss файлів
    gulp.watch('app/html/*.html', ['rigger']); //пошук html файлів
    gulp.watch(['app/js/scripts/bootstrap.js', 'app/package/chosen/chosen.jquery.js', 'app/package/slick-carousel/slick/slick.js', 'app/js/scripts/menu.js', 'app/js/scripts/scripts.js'], ['scripts']); //пошук html файлів
    gulp.watch('app/*.html', browserSync.reload); //пошук html файлів
    gulp.watch('app/js/*.js', browserSync.reload); //пошук js файлів
});
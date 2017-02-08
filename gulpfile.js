var gulp = require('gulp'); //ініціалізація gulp
var sass = require('gulp-sass'); //ініціалізація sass
var browserSync = require('browser-sync'); //автоматичне перезавантаження сторінки
var rigger = require('gulp-rigger'); //склеювання html
var concat = require('gulp-concat'); //конкатинація
var uglify = require('gulp-uglify'); //мініфікація js
var cleanCSS = require('gulp-clean-css'); //мініфікація css
var htmlmin = require('gulp-html-minifier'); //мініфікація html
var autoprefixer = require('gulp-autoprefixer'); //розстановка автопрефіксів
var clean = require('gulp-clean'); //очищення папки dist
var csscomb = require('gulp-csscomb'); //компановка css
var rimraf = require('rimraf');
var imagemin = require('gulp-imagemin');
var scsslint = require('gulp-scss-lint');


// Завдання для компіляції sass
gulp.task('sass', function () {
    return gulp.src('app/scss/volta.scss') //пошук файлів з розширенням scss
        .pipe(sass().on('error', sass.logError)) //вивід помилок
        .pipe(gulp.dest('app/css')) //вивід зкомпільованого файлу до теки css
        .pipe(browserSync.reload({ // перезавантажувати синхронізатор при кожній зміні
            stream: true
        }))
});

//lint для sass
gulp.task('lint', function () {
    return gulp.src('app/scss/volta.scss')
        .pipe(scsslint())
        .pipe(gulp.dest('app/reports'))
});

//завдання для browser-sync
gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: 'app' //робоча папка для перезавантаження сторінки
        }
    })
});

//конкатинація js
gulp.task('scripts', function () {
    return gulp.src(['app/package/jquery/dist/jquery.js', 'app/js/scripts/bootstrap.js', 'app/package/chosen/chosen.jquery.js', 'app/package/slick-carousel/slick/slick.js', 'app/js/scripts/menu.js', 'app/package/magnific-popup/dist/jquery.magnific-popup.js', 'app/js/scripts/scripts.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('app/js'));
});

//конкатинація html
gulp.task('rigger', function () {
    gulp.src(['app/html/*.html', '!app/html/footer.html', '!app/html/header.html'])
        .pipe(rigger())
        .pipe(gulp.dest('app/'));
});

//мініфікація js
gulp.task('compress', function () {
    return gulp.src('app/js/main.js')
        // .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

//мініфікація, комбінування та автопрефікси для css
gulp.task('minify-css', function () {
    return gulp.src('app/css/volta.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(csscomb())
        // .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
});

//мініфікація html
gulp.task('minify-html', function () {
    gulp.src('app/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'))
});

//мініфікація зображень
gulp.task('imagemin', function () {
    gulp.src('app/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
});

//очищення папки dist
gulp.task('clean', function (cb) {
    rimraf('./dist/*', cb);
});

//копіювання шрифтів
gulp.task('fonts', function() {
    return gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
})

//копіювання відео
gulp.task('video', function() {
    return gulp.src('app/video/**/*')
        .pipe(gulp.dest('dist/video'))
})

//build
gulp.task('build', ['fonts', 'video', 'imagemin', 'minify-css', 'compress'/*, 'minify-html', */], function () {
});


//слідкування за змінами у проекті
gulp.task('watch', ['scripts', 'rigger', 'browserSync', 'sass'], function () { //запуск browser-sync та sass відслідковувачів
    gulp.watch('app/scss/**/*.scss', ['sass']); //пошук scss файлів
    gulp.watch('app/html/*.html', ['rigger']); //пошук html файлів
    gulp.watch(['app/js/scripts/bootstrap.js', 'app/package/chosen/chosen.jquery.js', 'app/package/slick-carousel/slick/slick.js', 'app/js/scripts/menu.js', 'app/js/scripts/scripts.js'], ['scripts']); //пошук html файлів
    gulp.watch('app/*.html', browserSync.reload); //пошук html файлів
    gulp.watch('app/js/*.js', browserSync.reload); //пошук js файлів
});
const gulp = require('gulp'),

 
      //Plugins para optimizar imágenes
      imagemin = require('gulp-imagemin'),
      cache = require('gulp-cache'),
      
      //Comprimir css
       minifycss =require('gulp-minify-css'),

      //Comprimir JS
      uglify = require('gulp-uglify'),

      //Concatenar CSS/JS
      concat = require('gulp-concat')
     
;


/* * * * *

Tarea: Minificar Css

* * * * */
 
 
gulp.task('minify-css', function () {
  gulp.src('./src/css/*.css')
  .pipe(concat('main.min.css'))
  .pipe(minifycss())
  .pipe(gulp.dest('build/css'))
});


// Fin Compilar / Minificar Sass




/* * * * *

Tarea: Optimizar imagenes

* * * * */
gulp.task('images', function() {
    gulp.src('src/images/**/*')
        .pipe(cache(imagemin({
          optimizationLevel: 7,
          progressive: true,
          interlaced: true })))
        .pipe(gulp.dest('./dist/assets/images/'));
});
//Fin Optimizar imagenes




/* * * * *

Tarea: Optimizar Scripts

* * * * */
gulp.task('minify-js', function () {
  gulp.src('./src/js/*.js')
  .pipe(concat('main.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('build/js'))
});

//Fin Optimizar scripts



/* * * * *

Tarea: default

* * * * */


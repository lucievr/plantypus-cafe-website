// load modules
const gulp = require("gulp");
const del = require("del");
const browsersync_server = require("browser-sync").create();
const htmlmin = require("gulp-htmlmin");
const csso = require("gulp-csso");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const fs = require("fs");

// delete all assets in dist
function cleanAssets(done) {
  return del(["dist/**/*.html", "dist/img/**/*", "dist/js/**/*"], {
    force: true
  });
}

// publish HTML files src into dist
function publishHtml(done) {
  return gulp
    .src("src/**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist"));
}

// Copy all js files into dist
function publishJavaScript(done) {
  return gulp.src("src/js/**/*").pipe(gulp.dest("dist/js"));
}

// Copy all images from src/img into dist
function publishImages(done) {
  return gulp.src("src/img/**/*").pipe(gulp.dest("dist/img"));
}

// compile SCSS files
function compileScss(done) {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        browsers: ["last 3 versions"],
        cascade: false
      })
    )
    .pipe(csso())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"));
}

// watch files
// function watchFiles(done) {
//   gulp.watch("src/**/*.html", gulp.series(publishHtml, reload));
//   gulp.watch("src/js/**/*", gulp.series(publishJavaScript, reload));
//   gulp.watch("src/img/**/*", gulp.series(publishImages, reload));
//   gulp.watch("src/scss/**/*.scss", gulp.series(compileScss, reload));
// }

// // browserSync server
// function serve(done) {
//   browsersync_server.init({
//     server: {
//       baseDir: "./dist/"
//     }
//   });
//   done();
// }

// // browserSync reload
// function reload(done) {
//   browsersync_server.reload();
//   done();
// }

// export tasks
exports.watch = gulp.series(
  cleanAssets,
  publishHtml,
  publishJavaScript,
  publishImages,
  compileScss
);

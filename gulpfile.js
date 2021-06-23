("use strict");

var gulp = require("gulp");
var sass = require("gulp-sass");

sass.compiler = require("node-sass");

function defaultTask(cb) {
  cb();
}

gulp.task("sass", function () {
  return gulp
    .src("./assets/sass/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"));
});

gulp.task("sass:watch", function () {
  gulp.watch("./sass/**/*.scss", ["sass"]);
});

exports.default = defaultTask;

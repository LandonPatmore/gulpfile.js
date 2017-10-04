var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");

var autoprefixerOptions = {
    browsers: ["last 2 versions", "> 5%", "Firefox ESR"]
};

// Static Server + watching scss/html files
gulp.task("serve", ["sass"], function () {

    browserSync.init({
        server: {
            baseDir: "<DIRECTORY ALL FILES ARE IN, USE ./ IF STARTING FROM ROOT>",
            directory: true
        }
    });

    gulp.watch("<PATH TO DIRECTORY WITH SCSS FILES>/*.scss", ["sass"]);
    gulp.watch(["<PATH TO DIRECTORY WITH HTML FILES>/*.html", "<PATH TO DIRECTORY WITH JS FILES>/*.js"]).on("change", browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task("sass", function () {
    return gulp.src("<PATH TO DIRECTORY WITH SCSS FILES>/*.scss")
        .pipe(sass())
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest("<PATH TO DIRECTORY WITH CSS FILES>/css"))
        .pipe(browserSync.stream());
});

gulp.task("default", ["serve"]);

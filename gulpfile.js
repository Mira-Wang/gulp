var gulp = require("gulp")
const fs = require('fs');
var htmlmin = require("gulp-htmlmin") //压缩html
var uglify = require("gulp-uglify") //压缩js
var babel = require("gulp-babel");//将es6编译为es5
var cleancss = require("gulp-clean-css");//压缩css
var imagemin = require("gulp-imagemin");//压缩images
const plugins = require('gulp-load-plugins')();

var del = require('del'); //删除
var vinylPaths = require('vinyl-paths'); //管道

const { task, series, parallel, dest } = gulp

// 任务要先创建后使用，如果顺序调换会报错Task never defined：XXX

task("clean", series(cleanFunction))
function cleanFunction() {
  return gulp.src("./dist", {
    allowEmpty: true
  })
    .pipe(vinylPaths(del)) //进行压缩处理
    .on('end', () => {
      console.log(`\x1b[32m%s\x1b[39m`, `删除dist文件成功`)
    })
}

task("htmlmin", series(htmlFunction))
function htmlFunction() {
  return gulp.src("./src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true })) //进行压缩处理
    .pipe(dest("./dist/"))
    .on('end', () => {
      console.log(`\x1b[32m%s\x1b[39m`, `压缩html成功`)
    })
}

task("jsmin", series(jsFunction))
function jsFunction() {
  return gulp.src("./src/js/**/*.js")
    .pipe(babel({//编译ES6
      presets: ['es2015']
    }))
    .pipe(uglify()) //进行压缩处理
    .pipe(dest("./dist/js/"))
    .on('end', () => {
      console.log(`\x1b[32m%s\x1b[39m`, `压缩js成功`)
    })
}

task("cssmin", series(cssFunction))
function cssFunction() {
  return gulp.src("./src/css/**/*.css")
    .pipe(cleancss()) //进行压缩处理
    .pipe(dest("./dist/css/"))
    .on('end', () => {
      console.log(`\x1b[32m%s\x1b[39m`, `压缩css成功`)
    })
}

task("imagemin", series(imageFunction))
function imageFunction() {
  return gulp.src("./src/images/**/*.*")
    .pipe(imagemin()) //进行压缩处理
    .pipe(dest("./dist/images/"))
    .on('end', () => {
      console.log(`\x1b[32m%s\x1b[39m`, `压缩图片成功`)
    })
}

task("finish", series(finishFunction))
function finishFunction(cb) {
  console.log(`\x1b[31;7m%s\x1b[39;0m`, `===== 启动完毕 打开开发者工具可以进行开发了 =====`);
  cb();//callback
}


task("default", series("clean", "htmlmin", "jsmin", "cssmin", "imagemin", "finish"))
// task("default", series())

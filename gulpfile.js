//引入所需插件
var gulp = require("gulp"),
	sass = require("gulp-sass"),
	cssmin = require("gulp-cssmin"),
	uglify = require("gulp-uglify"),
	concat = require("gulp-concat"),
	rename = require("gulp-rename"),
	imagemin = require("gulp-imagemin");
//创建任务(发布任务)
gulp.task("hello",function(){
	console.log("hello word");
})
//编译sass
gulp.task("sass",function(){
	return gulp.src("sass/*.scss").pipe(sass({style:"expanded"})).pipe(gulp.dest("css")).pipe(rename({"suffix":".min"})).pipe(cssmin()).pipe(gulp.dest("css"))	
})
//监听任务
gulp.task("watch",function(){
	gulp.watch("sass/*.scss",["sass"]);
})

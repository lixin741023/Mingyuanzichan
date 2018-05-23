const gulp=require('gulp');
const connect=require('gulp-connect');


gulp.task('watch',function(){
	gulp.watch('../*.html',['html']);
	gulp.watch('../src/css/html/*.css',['html'])
});

gulp.task('connect',function(){
	connect.server({
		root:'../',
		ip:'127.0.0.1',
		livereload:true,
		port:7000
	})
});

gulp.task('html',function(){
	gulp.src('../*.html')
		.pipe(connect.reload());
});

gulp.task('run',['connect','watch'])

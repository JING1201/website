var gulp = require('gulp'),
browserSync = require('browser-sync');

//========== Test if gulp is working ==========
gulp.task('default', function() {
console.log('Success!'); 
});

gulp.task('browser-sync', function() {
browserSync({
files: 'index.html, main.css, about.html, calendar.html, contact.html', 
port: 8082
});
});
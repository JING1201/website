var gulp = require('gulp'),
browserSync = require('browser-sync');

//========== Test if gulp is working ==========
gulp.task('default', function() {
console.log('Success!'); 
});

gulp.task('browser-sync', function() {
browserSync({
files: 'index.html, index-2.html, css/main.css, about.html, calendar.html, contact.html, css/responsive.css', 
port: 8082
});
});
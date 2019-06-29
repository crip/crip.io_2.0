/**
 * gulpfile.js
 */

var gulp        = require("gulp"),
    size        = require("gulp-size")
    browserSync = require("browser-sync")
    cp          = require('child_process'),
    plumber     = require("gulp-plumber");
    
/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', ['copy'], function (done) {
  return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
      .on('close', done);
});

gulp.task('copy', function () {
  gulp.src('./CNAME')
    .pipe(gulp.dest('./_site/'));
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', function () {
  browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['jekyll-build'], function() {
  browserSync({
      server: {
          baseDir: '_site'
      },
      notify: false
  });
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
  gulp.watch(['!node_modules/*','!_site/*', '**/*.html', '_posts/**', 'assets/**', 'images/**' ], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);

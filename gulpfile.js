/**
 * AaronMazade.com
 * Description: Accompanies Harp for Browser Sync and NPM component fetchings.
 */

var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var merge       = require('merge-stream');
var rename      = require('gulp-rename');
var harp        = require('harp');
var deploy      = require('gulp-gh-pages');

/**
 * Serve the Harp Site from the src directory
 */
gulp.task('serve', function () {
  harp.server(__dirname, {
    port: 9000
  }, function () {
    browserSync({
      proxy: "localhost:9000",
      open: false,
      /* Hide the notification. It gets annoying */
      notify: {
        styles: ['opacity: 0', 'position: absolute']
      }
    });
    /**
     * Watch for stylus changes, tell BrowserSync to refresh main.css
     */
    gulp.watch("**/*.scss", function () {
      reload("public/assets/styles/main.css", {stream: true});
    });
    /**
     * Watch for all other changes, reload the whole page
     */
    gulp.watch(["**/*.ejs"], function () {
      reload();
    });
  });
});

/**
 * Task: NPM Components
 * ================
 * This is a manual process for components that should be included.
 * This function is not included in the default Gulp process.
 * Run 'gulp npm-packages' to use.
 */

gulp.task('npm-packages', function () {
    // Normalize
    gulp.src('./node_modules/normalize.css/normalize.css')
    .pipe(rename('_normalize.scss'))
    .pipe(gulp.dest('public/assets/styles/_vendor/')); // Copies to src/scss
});

gulp.task('deploy', function() {
  gulp.src('./www/**/*')
  .pipe(deploy());
});

/**
 * Default task, running `gulp` will fire up the Harp site,
 * launch BrowserSync & watch files.
 */
gulp.task('default', ['serve']);
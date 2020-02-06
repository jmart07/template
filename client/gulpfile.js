const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const exec = require('child_process').exec;
const consola = require('consola');

gulp.task('default', (cb) => {
  consola.info("default gulp task");

  nodemon({
    script: 'server.js',
    env: {'NODE_ENV':'development'}
  });

  consola.success('Successfully booted up server with Nodemon');

  browserSync.init({
    proxy: {
      target: 'http://localhost:8000',
      ws: true
    },
    serveStatic: ['./assets']
  });
  consola.success('BrowserSync ran');
  cb();
});

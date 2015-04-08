var gulp = require('gulp'),
  gutil = require('gulp-util'),
  browserify = require('browserify'),
  watchify = require('watchify'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload,
  sass = require('gulp-sass'),
  babelify = require('babelify');

var browserifyOpts = {
  entries: ['./js/index.js'],
  debug: true,
  transform: [babelify],
  // the opts below are required for watchify
  cache: {},
  packageCache: {}
};

var bundler = watchify(browserify(browserifyOpts));

gulp.task('js', bundle);
bundler.on('update', bundle);
bundler.on('log', gutil.log);

function bundle() {
  return bundler.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./public/js'))
    .pipe(reload({stream: true}));
}

gulp.task('sass', function() {
  gulp.src('scss/app.scss')
    .pipe(sass({
        includePaths: ['node_modules/zurb-foundation-5/scss/'],
        outputStyle: 'nested',
        sourceMap: 'public/css/'
      }))
    .pipe(gulp.dest('./public/css'))
    .pipe(reload({stream: true}));
});

gulp.task('default', ['sass', 'js'], function() {
  browserSync({
    server: {
      baseDir: './public'
    }
  });

  gulp.watch('scss/*.scss', ['sass']);
  gulp.watch('public/*.html').on('change', reload);
});

var gulp = require('gulp'),
  gutil = require('gulp-util'),
  browserify = require('browserify'),
  watchify = require('watchify'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload,
  sass = require('gulp-sass'),
  reactify = require('reactify');

var dirs = {
  in: {
    js: ['./js/index.js'], //entry points, include multiple to create multiple bundles
    scss: 'scss/app.scss'
  },
  out: {
    root: './public',
    js: '/js',
    css: '/css'
  }
}

var output = {
  root: './public',
  js: '/js',
  css: '/css'
}

var browserifyOpts = {
  entries: dirs.in.js,
  debug: true,
  transform: [reactify],
  // the opts below are require for watchify
  cache: {},
  packageCache: {}
};

var b = watchify(browserify(browserifyOpts));

gulp.task('js', bundle);
b.on('update', bundle);
b.on('log', gutil.log);

function bundle() {
  return b.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest(dirs.out.js))
    .pipe(reload({stream: true}));
}

gulp.task('sass', function() {
  gulp.src(dirs.in.scss)
    .pipe(sass({
        includePaths: ['node_modules/zurb-foundation-5/scss/'],
        outputStyle: 'nested',
        sourceMap: 'public/css/'
      }))
    .pipe(gulp.dest(dirs.out.css))
    .pipe(reload({stream: true}));
});

gulp.task('default', ['sass', 'js'], function() {
  browserSync({
    server: {
      baseDir: 'public'
    }
  });

  gulp.watch('scss/*.scss', ['sass']);
  gulp.watch('public/*.html').on('change', reload);
});

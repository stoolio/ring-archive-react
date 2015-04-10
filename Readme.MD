Gulp Starter for Browserify w/ Babelify - Not really anymore
===================

Also includes jQuery, Modernizr, and Foundation plus Sass compilation and Browser Sync
-

I will write up a full diddly later, but its nearly ~~1am~~ ~~6am~~ 5am. 3 nights on this, uh oh.

There is currently some crap in here of mine, feel free to ignore it if you just want the setup.

Directions
-----

All you need installed on your system is nodejs, everything is installed via npm.

* git clone/fork/spoon this repo
* npm install
* gulp

If you don't have gulp installed globally, you can either install it `npm install -g gulp` or run the local copy `./node_modules/.bin/gulp`.

The important bits for the simple and simply amazing react-foundation skeleton are in the root folder:

* gulpfile.js
* package.json

Files are served statically via Browser Sync.

You need to set up these files/folders, or edit the gulpfile:

* js/index.js
* scss/app.scss
* public/index.html

Info Stuff
-----

This will watch for changes to your source files in:

* ./js/**/*.js
* ./scss/**/*.scss
* ./public/**/*.html (the 'server' folder)

It will then automagically refresh your page.

Currently, I went ahead and uglified/concatted Foundation & Modernizr by hand, they are included in the repo.

Modernizr is included in the head globally, and jQuery and Foundation's js are included right before the end of the body (globally). I haven't bothered to browserify-shim them, but if you want to set that up, feel free. It's included in the devDependencies.

The babelified, and browserified app.jss is included last for convenience.

The React tutorial ~~is~~ was included to demonstrate that it works, requires and all. There is other stuff at the moment, but I think it is much more interesting (images not included). Don't mind the wonky animations at the moment, thats `React.addons.CSSTransitionGroup` being obnoxious.

I like simple, so this is not a very opinionated setup. The gulpfile.js is only 49loc. I tried to use the smallest amount of plugins possible.

I much prefer this to some of the other monstrosities you might find (like gulp-starter). It's not a knock, just not my cup of tea.

Webpack-React-Hot-Load
===================

Also includes jQuery, Modernizr, and Foundation

jQuery is included because Foundation's js needs it.

Foundation's js is included because a couple of components need it.

Everything is being converted to React, so both of these libraries are deprecated and will be removed ASAP.

Don't write code dependent on them.

---

Directions
-----

Make sure node and npm are installed on your path:

* git clone/fork/spoon this repo
* npm install
* npm start

There are some images and other data assets not included in the repo, they are available via Dropbox.

Info
-----

Files are served from public by webpack-dev-server.

This will watch for changes to your source files in:

* `./js/**/*.js`
* `./scss/**/*.scss`

It will then automagically hot reload.

Currently, I went ahead and uglified/concatted Foundation & Modernizr by hand, they are included in the repo.

Modernizr is included in the head globally, and jQuery and Foundation's js are included right before the end of the body (globally). I want to drop both of these, but I need to rewrite a couple Foundation components to be React friendly, so they stay for now.

---

Why
-----

I like simple, so this is not a very opinionated setup. I took bits of other webpack setups and cut out as much as I could.

I much prefer this to some of the other monstrosities you might find.

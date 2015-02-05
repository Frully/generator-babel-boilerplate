# 6to5-library-boilerplate
[![Travis build status](http://img.shields.io/travis/6to5/6to5-library-boilerplate.svg?style=flat)](https://travis-ci.org/6to5/6to5-library-boilerplate)
[![Code Climate](https://codeclimate.com/github/6to5/6to5-library-boilerplate/badges/gpa.svg)](https://codeclimate.com/github/6to5/6to5-library-boilerplate)
[![Test Coverage](https://codeclimate.com/github/6to5/6to5-library-boilerplate/badges/coverage.svg)](https://codeclimate.com/github/6to5/6to5-library-boilerplate)
[![Dependency Status](https://david-dm.org/6to5/6to5-library-boilerplate.svg)](https://david-dm.org/6to5/6to5-library-boilerplate)
[![devDependency Status](https://david-dm.org/6to5/6to5-library-boilerplate/dev-status.svg)](https://david-dm.org/6to5/6to5-library-boilerplate#info=devDependencies)

Author libraries in ES6 for Node and the browser.

### Features

- Author in ES6
- Export as ES5 & UMD
- Mocha-Chai-Sinon testing stack
- Unit tests that work in Node and in the browser

### Getting Started

Place your code in `src`. The primary file is `index.js` (note:
[the filename can be changed](https://github.com/6to5/6to5-library-boilerplate#i-want-to-change-the-primary-source-file)).
Run `gulp build` to compile the source into a distributable format.

Put your unit tests in `test/unit`. The `gulp` command runs the tests.

### Gulp

There are three primary Gulp tasks.

- `gulp` - Lint the library and tests, then run the unit tests
- `gulp build` - Lint then build the library
- `gulp test:browser` - Build the library for use with the browser spec runner.
  Changes to the source will cause the runner to automatically refresh.

### Browser Tests

The [browser spec runner](https://github.com/6to5/6to5-library-boilerplate/blob/master/test/runner.html)
can be opened in a browser to run your tests. For it to work, you must first run `gulp test:browser`. This
will set up a watch task that will automatically refresh the tests when your scripts, or the tests, change.

### Code Climate

This library is set up to integrate with Code Climate. If you've never used Code Climate, then you might be wondering
why it's useful. There are two reasons:

1. It consumes code coverage reports, and provides a coverage badge for the README
2. It provides interesting stats on your library, if you're into that kinda thing

Either of these items on the list can simply be ignored if you're uninterested in them. Or you can pull Code Climate
out entirely from the boilerplate and not worry about it. To do that, update the relevant Gulp tasks and the Travis
build.

If you'd like to set up Code Climate for your project, follow [the steps here](https://github.com/6to5/6to5-library-boilerplate/wiki/Code-Climate).

### FAQ

#### When should I consider using this boilerplate?

You're authoring a library that exports a single file, and that one file
exports a single variable.

#### When might I not want to use this boilerplate?

You can always use this boilerplate as inspiration, but it works best for smaller libraries.
If you're building a full-scale webapp, you will likely need many more changes to the build system.

#### What's the browser compatibility?

As a rule of thumb, this transpiler works best in IE9+. You can support IE8 by limiting yourself
to a subset of ES6 features. The [6to5 caveats page](http://6to5.org/docs/usage/caveats/) does an
excellent job at explaining the nitty gritty details of supporting legacy browsers.

#### Are there examples?

Quite a few! Check them out on [the wiki](https://github.com/6to5/6to5-library-boilerplate/wiki/Examples).

### Customizing

This boilerplate is, to a certain extent, easily customizable. To make changes,
find what you're looking to do below and follow the instructions.

#### I want to change the primary source file

The primary source file for the library is `src/index.js`. Only the files that this
file imports will be included in the final build. To change the name of this entry file:

1. Rename the file
2. Update the value of `entryFileName` in `package.json` under `to5BoilerplateOptions`

#### I want to change the exported file name

1. Update the value of `exportFileName` in `package.json` under `to5BoilerplateOptions`
2. Update `main` in `package.json`

#### I want to change what variable my module exports

`MyLibrary` is the name of the variable exported from this boilerplate. You can change this by following
these steps:

1. Ensure that the variable you're exporting exists in your scripts
2. Update the value of `exportVarName` in `package.json` under `to5BoilerplateOptions`
3. Update the globals array in the `test/.jshintrc` file
4. Check that the unit tests have been updated to reference the new value

#### I want to change the destination directory

1. Update the value of `destinationFolder` in `package.json` under `to5BoilerplateOptions`
2. Update `main` in `package.json`

#### My library depends on an external module

In the simplest case, you just need to install the module and use it in your scripts.

If you want to access the module itself in your unit test files, you will need to set up the
test environment to support the module. To do this:

1. Load the module in the [test setup file](https://github.com/6to5/6to5-library-boilerplate/blob/master/test/setup/setup.js).
  Attach any exported variables to global object if you'll be using them in your tests.
2. Update both `.jshintrc` files to include any new global variable that you have added
3. Add those same global variables to the `mochaGlobals` array in `package.json` under
  `to5BoilerplateOptions`

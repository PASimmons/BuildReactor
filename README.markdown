BuildReactor [![Build Status](https://secure.travis-ci.org/AdamNowotny/BuildReactor.png)](http://travis-ci.org/AdamNowotny/BuildReactor) [![Dependency Status](https://gemnasium.com/AdamNowotny/BuildReactor.png)](https://gemnasium.com/AdamNowotny/BuildReactor)
============

Developer notifications and dashboard (Google Chrome extension)
 * Gives you overview of all your builds in one place
 * Supports all continuous integration servers
 * Shows only relevant notifications to minimise distractions
 * Let's you setup information radiator for your team within minutes, not hours or days
 * Works on Windows, Mac and Linux

Links
-----
Install from [Chrome Web Store](http://goo.gl/BX01T)

Updates on [Twitter](https://twitter.com/BuildReactor) and [Google Plus](https://plus.google.com/110744393630490320507/)

[Version history](https://github.com/AdamNowotny/BuildReactor/wiki/What's-new)

Supported services
==================

Below are the supported CI servers.

 * [Atlassian Bamboo](http://www.atlassian.com/software/bamboo/)
 * [BuildBot](http://buildbot.net/)
 * Servers using [XML cctray format](http://confluence.public.thoughtworks.org/display/CI/Multiple+Project+Summary+Reporting+Standard) like [CruiseControl](http://cruisecontrol.sourceforge.net/), [CruiseControl.NET](http://www.cruisecontrolnet.org/), [CruiseControl.rb](http://cruisecontrolrb.thoughtworks.com/)
 * [ThoughtWorks GO](http://www.thoughtworks-studios.com/go-continuous-delivery)
 * [Jenkins](http://jenkins-ci.org/) (Hudson)
 * [Snap](http://snap-ci.com/)
 * [TeamCity](http://www.jetbrains.com/teamcity/)
 * [Travis-CI](http://travis-ci.org/)

Screenshots
===========

Notifications
-------------
<img src="https://github.com/AdamNowotny/BuildReactor/raw/master/docs/notifications-640x400.jpg" alt="BuildReactor notifications">

Popup and chrome badge
----------------------
<img src="https://github.com/AdamNowotny/BuildReactor/raw/master/docs/popup-640x400.jpg" alt="BuildReactor popup">

Options page - adding new service
---------------------------------
<img src="https://github.com/AdamNowotny/BuildReactor/raw/master/docs/settings-new-1280x800.jpg" alt="BuildReactor options page">

Options page - service settings
-------------------------------
<img src="https://github.com/AdamNowotny/BuildReactor/raw/master/docs/settings-1280x800.jpg" alt="BuildReactor options page">

Dashboard page
-------------------------------
<img src="https://github.com/AdamNowotny/BuildReactor/raw/master/docs/dashboard-1280x800.jpg" alt="BuildReactor dashboard">

Developer setup
===============

Installation
------------

[Node.js](http://nodejs.org/) is required to build the extension. After it's installed go to project directory and run:

```
npm install
bower update
grunt
```

Open Chrome Extension manager and `Load unpacked extension..` from `_build/BuildReactor` folder.

`grunt` - full build

`grunt dist` - create distribution package without running tests

Reloading the extension in Chrome is required every time you make a change.

Testing
-------

`grunt test` - run Karma using Chrome (edit `karma.conf.js` to change) and watch for changes

Once running you can also open `localhost:9876/base/options.html` or any other HTML file in the browser to test using sample data. This does not require you to load as Chrome Extension.

Technical overview
==================

The packaged version uses:
 * [AngularJS](angularjs.org)
 * [Bootbox](http://bootboxjs.com/)
 * [Font Awesome](http://fortawesome.github.com/Font-Awesome/)
 * [Handlebars](http://handlebarsjs.com/) templates using [require-handlebars-plugin](https://github.com/SlexAxton/require-handlebars-plugin)
 * [JS-Signals](http://millermedeiros.github.com/js-signals/)
 * [jQuery](http://jquery.com/)
 * [Mout](http://moutjs.com/)
 * [Require-JS](http://requirejs.org/)
 * [RxJS](http://reactive-extensions.github.com/RxJS/)
 * [RxJS-jquery](https://github.com/Reactive-Extensions/rxjs-jquery)
 * [Twitter bootstrap](http://twitter.github.com/bootstrap/)

The build and tests use:
 * [Bower](http://twitter.github.com/bower/)
 * [Grunt](http://gruntjs.com/)
 * [Grunt-karma](https://github.com/gruntjs/grunt-contrib)
 * [Plato](https://github.com/jsoverson/plato)
 * [Jasmine](http://pivotal.github.com/jasmine/)
 * [Jasmine-jquery](https://github.com/velesin/jasmine-jquery/)
 * [Jasmine-signals](https://github.com/AdamNowotny/jasmine-signals)
 * [Karma](http://karma-runner.github.io/)
 * [RequireJS plugins](https://github.com/millermedeiros/requirejs-plugins)
 * [Travis-CI](http://travis-ci.org/)

Legal
=====

This code is distributed under Apache License version 2.0

Application icon based on https://commons.wikimedia.org/wiki/File:Radiation_warning_symbol_3.svg

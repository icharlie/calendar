Package.describe({
  name: 'icharlie:calendar',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: "Calendar's utility functions",
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/icharlie/calendar',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('momentjs:moment', ['client']);
  api.addFiles('calendar.js', ['client']);
  api.export('Calendar');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('momentjs:moment');
  api.addFiles('calendar.js');
  api.export('Calendar');
  api.addFiles('calendar-tests.js');
});

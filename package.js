Package.describe({
  summary: "output precise time differences in Chinese, eg: 1 分钟以前",
  version: "1.0.0",
  git: 'git@github.com:apprentice1988/timedifference-zh.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.1');
  api.addFiles('walawala:timedifference-zh.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('walawala:timedifference-zh');
  api.addFiles('walawala:timedifference-zh-tests.js');
});

var gitsync = require('./lib/simple-git/index');

gitsync({
  'dest': __dirname.toString().substring(0, __dirname.toString().indexOf("node_modules")) + 'extern/gateway/tags',
  'repo': 'https://github.com/SHEFFcode/subrepo.git',
  'localfolder': 'code',
  'branch': 'jeremy'
}, function() {
  console.log("done!");
});

var svnsync = require('./index');

svnsync({
  'dest': __dirname,
  'repo': 'https://github.com/SHEFFcode/subrepo.git',
  'localfolder': 'external',
  'branch': 'jeremy'
}, function() {
  console.log("done!");
});

var svnsync = require('./index');

svnsync({
  'dest': __dirname,
  'repo': 'https://github.com/foreseecode/CLIENT_CODE.git',
  'localfolder': 'external',
  'branch': 'jeremy'
}, function() {
  console.log("done!");
});

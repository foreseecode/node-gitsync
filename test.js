var svnsync = require('./index');

svnsync({
  'dest': __dirname,
  'repo': 'https://github.com/SHEFFcode/mainrepo.git',
  'localfolder': 'code'
}, function() {
  console.log("done!");
});

var svnsync = require('./index');

svnsync({
  'dest': './out',
  'repo': 'https://svn.bla.com/technology/GATEWAY_JS/tags/1.0.5',
  'localfolder': 'code'
}, function() {
  console.log("done!");
});
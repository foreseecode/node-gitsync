Node GitSync
===================
Helper library for syncronizing a remote git repository with a local folder, being sure to only pull it down when it does not exist locally.
###Installation &nbsp;  [![npm version](https://badge.fury.io/js/node-svnsync.svg)](http://badge.fury.io/js/node-svnsync)
```sh
npm install node-svnsync
```
###Simple Usage
```javascript
var svnsync = require('node-svnsync');

svnsync({
  'dest': './out',
  'repo': 'https://svn.bla.com/technology/GATEWAY_JS/tags/1.0.5',
  'localfolder': 'code'
}, function(err) {
  console.log("done!");
});
```

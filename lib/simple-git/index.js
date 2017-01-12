var Git = require('./git');

var ChildProcess = require('child_process');
var Buffer = require('buffer').Buffer;
var exists = require('./util/exists');

module.exports = function (baseDir) {
  return new Git(baseDir || process.cwd(), ChildProcess, Buffer);
};


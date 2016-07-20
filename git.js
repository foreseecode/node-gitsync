'use strict';

//var //Git     = require('simple-git')(loc),//(__dirname.toString().substring(0, __dirname.toString().indexOf("node_modules"))),// + 'extern/gateway/tags'),

var Client = function (loc) {
  this.Git = require('simple-git')(loc);// + 'extern/gateway/tags'),
    var util    = require('util'),
    xml2js  = require('xml2js'),
    async   = require('async'),
    fs      = require('fs');

  //console.log("directory name is: " + __dirname.toString().substring(0, __dirname.toString().indexOf("node_modules")) + 'extern/gateway/tags')

};

Client.prototype.clone = function (repoURL, folderName, folderStructure, cb) {
  var cb = cb || function () {
    console.log('repo cloned');
  }
  if (folderName) {
    var optionsArr = ['-b' + folderName];
  }
  console.log("line 22, folder name is: " + folderName)
  this.Git.clone(repoURL, folderName, optionsArr, cb);
};

Client.prototype.pull = function (repoURL, branch, cb) {
  Git.pull(repoURL, folderName, cb)
};

Client.prototype.addTag = function (tagName, cb) {
  tagName ? Git.addTag(tagName, cb) : console.log('Please input a tag name');
};

Client.prototype.checkoutLocalBranch = function (branchName, cb) {
  branchName ? Git.checkoutLocalBranch(branchName, cb) : console.log('Please input a branch name');
};

Client.prototype.checkoutLatestTag = function (cb) {
  Git.checkoutLatestTag(cb);
}

Client.prototype.add = function (param) {
  //TODO: loop through the arguments and see if they are a function, if they are not a function push them into a single array and pass to fn.
  var param = param || './*';
  Git.add(param);
}

Client.prototype.commit = function (message) {
  Git.commit(message);
}

Client.prototype.push = function (remote, branch, cb) {
  Git.push(remote, branch, cb)
}

Client.prototype.pushTags = function (remote, cb) {
  Git.pushTags(remote, cb);
}

Client.prototype.rm = function (file, cb) {
  Git.rm(file, cb);
}

Client.prototype.status = function () {
  Git.status();
}

module.exports = Client;

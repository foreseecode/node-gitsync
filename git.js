'use strict';

var Git     = require('simple-git')(__dirname),
    util    = require('util'),
    xml2js  = require('xml2js'),
    async   = require('async'),
    fs      = require('fs');

var Client = function () { };

Client.prototype.clone = function (repoURL, folderName, cb) {
  var cb = cb || function () {
    console.log('repo cloned');
  }
  Git.clone(repoURL, folderName, cb)
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

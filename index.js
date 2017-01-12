/**
 * Dependencies
 */
var fs = require('fs'),
  rimraf = require('rimraf'),
  colors = require('colors'),
  simpleGit = require('./lib/simple-git/index');

/**
 * Is the dir empty?
 * @param dirname
 * @param cb
 */
function isDirEmpty(dirname, cb) {
  fs.readdir(dirname, function (err, files) {
    if (err) {
      // some sort of error
      cb({message: "error"}, true);
    } else {
      if (!files.length) {
        // directory appears to be empty
        cb(null, true);
      } else {
        cb(null, false);
      }
    }
  });
}

/**
 * Synchronizes a remove svn repo
 * @constructor
 */

var GITSync = function (obj, cb) {
  var loc = obj.dest;
  if (!obj.dest) {
    throw new Error("Destination (dest) folder is required.");
  }

  if (!obj.branch) {
    throw new Error("Repo branch (branch) is required.");
  }

  if (!obj.repo) {
    throw new Error("Remote repository (repo) is required.");
  }

  // Make sure there is a callback
  cb = cb || function () {
      console.log("Git Sync finished.");
    };

  // Decide where this goes
  var fullqualifiedplace = obj.dest + '/' + obj.branch;

  // Check if we need to make the parent folder
  if (!fs.existsSync(obj.dest)) {
    fs.mkdir(obj.dest);
  }

  isDirEmpty(fullqualifiedplace, function (err, isempty) {
    if (!fs.existsSync(fullqualifiedplace) || isempty) {
      console.log("gitsync".yellow + ": ".grey + "Folder " + fullqualifiedplace + " doesn't exist. Creating it..");
      // Make the tag folder if it doesn't exist
      if (!isempty) {
        fs.mkdir(fullqualifiedplace);
      }

      var client = new simpleGit(obj.dest);

      console.info("gitsync".yellow + ": ".grey + "Wait a moment, pulling repo " + obj.repo + "...");

      client.clone(obj.repo, obj.branch, function (err, data) {
        if (err) {
          rimraf(fullqualifiedplace);
          cb(err);
        } else {
          cb();
        }
      });
    } else {
      cb();
    }
  });

};

/**
 * Expose the class to the world
 * @type {Function}
 */

module.exports = GITSync;

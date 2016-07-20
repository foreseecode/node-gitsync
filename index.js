/**
 * Dependencies
 */
var gitclient = require('./git')
    getcreds  = require('./getcreds'),
    fs        = require('fs'),
    rimraf    = require('rimraf');



/**
 * Synchronizes a remove svn repo
 * @constructor
 */

var SVNSync = function (obj, cb) {

  var loc = obj.loc,
  Git     = require('simple-git');//(loc);

  //gitclient = gitclient(__dirname.toString().substring(0, __dirname.toString().indexOf("node_modules")) + 'extern/gateway/tags');

  if (!obj.dest) {
    throw new Error("Destination (dest) folder is required.");
  }

  if (!obj.branch) {
    throw new Error("Repo branch is required.");
  }

  if (!obj.repo) {
    throw new Error("Remote repository (repo) is required.");
  }

  // Make sure there is a callback
  cb = cb || function () {
      console.log("Git Sync finished.");
    };

  // Decide where this goes
  var fullqualifiedplace  = obj.dest + '/' + obj.branch,
    semiqualified       = obj.dest;
  console.log("line 37:" + fullqualifiedplace);

  if (obj.localfolder.indexOf('/') > -1) {
    semiqualified = obj.dest + '/' + obj.localfolder.substr(0, obj.localfolder.lastIndexOf('/'));
  }

  /**
   * Runs the actual sync
   * @param username
   * @param password
   */
  function runsync() {
    console.log("line 50; runsync, location: " + __dirname.toString().substring(0, __dirname.toString().indexOf("node_modules")) + obj.dest.split('./')[1]);

    var client = new gitclient(loc);//(__dirname.toString().substring(0, __dirname.toString().indexOf("node_modules")));
    //var client = new gitclient()(__dirname.toString().substring(0, __dirname.toString().indexOf("node_modules")) + obj.dest);

    if (fs.existsSync(fullqualifiedplace)) {
      console.log('line 50, folder already exists, exiting');
    } else {
      // Make the tag folder if it doesn't exist
      if (!fs.existsSync(fullqualifiedplace)) {
        fs.mkdir(fullqualifiedplace);
      }
      var ctx = this;

      console.info("Wait a moment, pulling repo " + obj.repo + "...");

      client.clone(obj.repo, obj.branch, obj.dest.split('./')[1], function (err, data) {
        console.log("obj.repo: " + obj.repo + "\nobj.branch: " + obj.branch + "\nobj.dest: " + obj.dest);
        if (err) {
          //TODO: delete folder
        }
        else {
          cb();
        }
      });
    }
  }

  // Check to see if we already have it
  if (fs.existsSync(fullqualifiedplace)) {
    console.log("folder is:" + fullqualifiedplace);
    console.log('line 66, folder already exists, exiting');
  } else {
    runsync();
  }

};

/**
 * Expose the class to the world
 * @type {Function}
 */

module.exports = SVNSync;
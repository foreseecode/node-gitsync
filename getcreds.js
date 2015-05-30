/**
 * Dependencies
 * @type {exports|module.exports}
 */
var prompt = require('prompt');

/**
 * Get Subversion credentials
 * @param cb
 * @param desc
 */
var get_creds = function (repo, cb) {
  var schema = {
    properties: {
      username: {
        required: true
      },
      password: {
        hidden: true
      }
    }
  };
  console.info("Please enter your SVN credentials for " + repo + ":");
  prompt.start();
  prompt.get(schema, function (err, result) {
    if (!err) {
      cb(result.username, result.password, {
        username: result.username,
        password: result.password
      });
    }
  });
};

// Expose it
module.exports = get_creds;
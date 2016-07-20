setTimeout(function () {
  // First grab the gateway code
  svnsync({
    'loc': __dirname.toString().substring(0, __dirname.toString().indexOf("node_modules")) + "extern/gateway/tags",
    'dest': clientProperties.build.extern + '/gateway/tags',
    'localfolder': clientProperties.gateway_version.toString().split('/')[1],
    'repo': "https://github.com/foreseecode/gateway_js.git",
    'branch': '1.1.9'
  }, function (err) {
    if (err) {
      console.log("Error getting gateway code!", err);
      return;
    }
    // Now go get the client code
    svnsync({
      'loc': __dirname.toString().substring(0, __dirname.toString().indexOf("node_modules")) + "extern/clientcode/tags",
      'dest': clientProperties.build.extern + '/clientcode/tags',
      'localfolder': clientProperties.clientcode_version.toString().split('/')[1],
      'repo': "https://github.com/foreseecode/client_code.git",
      'branch': '19.0.27'
    }, function (err) {
      if (err) {
        console.log("Error getting client code!", err);
        return;
      }
      if (cb) {
        cb();
      }
    });
  });
}, 250);
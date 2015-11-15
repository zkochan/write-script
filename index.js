'use strict';

function writeScript(url, opts) {
  opts = opts || {};

  var script = document.createElement('script');
  script.src = url;
  script.async = opts.async;
  /* jshint ignore:start */
  document.write(script.outerHTML);
  /* jshint ignore:end */
}

module.exports = writeScript;

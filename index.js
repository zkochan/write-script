'use strict';

var firstScript = document.getElementsByTagName('script')[0];

function writeScript(url, opts) {
  opts = opts || {};

  var script = document.createElement('script');
  script.src = url;
  script.async = opts.async;

  if (document.readyState === 'loading') {
    /* jshint ignore:start */
    document.write(script.outerHTML);
    /* jshint ignore:end */
    return;
  }
  firstScript.parentNode.insertBefore(script, firstScript);
}

module.exports = writeScript;

'use strict';

module.exports = function(url) {
  var script = document.createElement('script');
  script.src = url;
  document.write(script.outerHTML);
};

# write-script

Writes a script tag to the document.

[![Dependency Status](https://david-dm.org/zkochan/write-script/status.svg?style=flat)](https://david-dm.org/zkochan/write-script)
[![Build Status](https://travis-ci.org/zkochan/write-script.svg?branch=master)](https://travis-ci.org/zkochan/write-script)
[![npm version](https://badge.fury.io/js/write-script.svg)](http://badge.fury.io/js/write-script)


## Installation

```
npm i --save write-script
```


## Usage

```js
var writeScript = require('write-script');

writeScript('http://foo.com/bar.js', {
  async: true
});
```


## License

MIT

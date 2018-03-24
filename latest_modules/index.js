'use strict';

const dependencies = require('./package.json').dependencies;

Object.keys(dependencies).forEach(key => {
  module.exports[key] = require(key);
});

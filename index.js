/* jshint node: true */
'use strict';

var path = require('path');
module.exports = {
  name: 'ember-cli-firebase-hosting',

  includedCommands: function() {
    return {
      'firebase': require('./lib/commands/firebase')
    }
  },

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  }
}

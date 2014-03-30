var crypto = require('crypto');


module.exports = function(size, callback) {
  crypto.randomBytes(size, function(err, buf) {
      if (err) {
        crypto.pseudoRandomBytes(size, function(err, buf) {
          return callback(err, buf);
        });
      }
      return callback(null, buf);
  });
};
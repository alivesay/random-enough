var crypto = require('crypto');


module.exports = function(size, callback) {
  if (callback) {
    crypto.randomBytes(size, function(err, buf) {
        if (err) {
          crypto.pseudoRandomBytes(size, function(err, buf) {
            return callback(err, buf);
          });
        }
        return callback(null, buf);
    });
  }

  try {
    return crypto.randomBytes(size);
  } catch (e) {
    return crypto.pseudoRandomBytes(size);
  }
};
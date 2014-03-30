random-enough
=============

For when `crypto.randomBytes()` would be nice, but `crypto.pseudoRandomBytes()` is good enough.

```
var randomEnoughBytes = require('random-enough');

randomEnoughBytes(size, function (err, buf) {...});
```

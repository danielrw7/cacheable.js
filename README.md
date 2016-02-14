# cacheable.js
[cacheable.js](https://github.com/danielrw7/cacheable.js/blob/master/cacheable.js) - Function wrapper for caching function results based on the function arguments.

_I realized after making this that this already exists with memoization (for example: [memoizee](https://github.com/medikoo/memoizee))._

## Usage
```javascript
function add(callback, a, b) {
  console.log('Adding:', a, b);
  return callback(a + b);
}
var addC = cacheable(add);

addC(console.log.bind(console), 1, 2);
// => Adding 1 2
// => 3

addC(console.log.bind(console), 1, 2);
// => 3


function mult(a, b, callback) {
  console.log('Multiplying:', a, b);
  return callback(a * b);
}
var multC = cacheable(mult, 2); // The callback index is 2

multC(2, 3, console.log.bind(console));
// => Multiplying 2 3
// => 6

multC(2, 3, console.log.bind(console));
// => 6
```

# cacheable.js
cacheable.js - Function wrapper for caching function results based on the arguments.

## Usage
```javascript
function add(callback, a, b) {
  console.log('Adding:', a, b);
  return callback(a + b);
}
var addC = cacheable(add);

addC(console.log.bind(console), 1, 2)
// => Adding 1 2
// => 3

addC(console.log.bind(console), 1, 2)
// => 3
```

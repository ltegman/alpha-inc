# Alphanumeric Increment (alpha-inc)

Alphanumeric Increment is a simple node module for incrementing alphanumeric strings
(ie. `'a0B' => 'a0C'`).
Useful for things like URL shorteners or anything else that could make use of
incrementing strings. The incrementation order is 0-9 then a-z
then A-Z. It will automatically add a new character if required.

## Usage

```javascript
const alpha = require('alpha-inc');

alpha.next('1lg');
// returns: '1lh'

alpha.next('ZZ');
// returns: '000'

// Bad input
alpha.next('f*b');
// returns: null
```

## Contributors

Want to add decrementing or fix something? I welcome PRs! Please just add tape
tests for any new features you add in `test/alpha-inc.spec.js`

### Running tests

Run tests with `npm run test`.

## License

Licensed under the terms of the MIT license.

# shell-helper

Random helper functions for command based operations
See `sample.js` for usage.

* getAnswer

```js
const s = require('shell-helper')
s.getAnswer('What is your name').then(name => console.log(`Your name is ${name}.`))
```

* getAnswer with accepts option

```js
const s = require('shell-helper')
s.getAnswer('What is your favorite color', {accepts: ['red', 'blue']})
  .then(color => console.log(`Your favorite color is ${color}.`))
```

* askYesNo

```js
const s = require('shell-helper')
lib.askYesNo(`Are you sure`, true).then(answer => console.log(`You answered : ${answer}`))
```


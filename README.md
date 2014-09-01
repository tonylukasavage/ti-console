# ti-console

node.js-style `console` for Titanium. It can serve as a drop-in replacement for node.js `console` for use with [browserify][].

This is a port of Raynos's [console-browserify][].

## install

```bash
$ npm install ti-console
$ cp node_modules/ti-console/ti-console.js /path/to/project/Resources/
```

## example

```js
var console = require("ti-console");
console.log("Hello from %s version %s!", Ti.Platform.name, Ti.Platform.version);
```

You can also override the global `console` built into Titanium by overwriting it with this module in the app.js file.

```js
console = require('ti-console');
```

[browserify]: https://github.com/substack/node-browserify
[console-browserify]: https://github.com/Raynos/console-browserify
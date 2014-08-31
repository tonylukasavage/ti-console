# ti-console

node.js-style `console` for Titanium. It can serve as a drop-in replacement for node.js `console` for use with [browserify](https://github.com/substack/node-browserify).

This is a port of Raynos's [console-browserify](https://github.com/Raynos/console-browserify) project.

## install

`npm install ti-console`

## example

```js
var console = require("ti-console");
console.log("Hello from %s version %s!", Ti.Platform.name, Ti.Platform.version);
```

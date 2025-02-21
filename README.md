# nightwatch-lambdatest-endlambda

Nightwatch.js custom command for adding test name and status for LambdaTest.

[![Node.js CI](https://github.com/simonwang384/nightwatch-lambdatest-endlambda/actions/workflows/main.yml/badge.svg)](https://github.com/simonwang384/nightwatch-lambdatest-endlambda/actions/workflows/main.yml)

## Installation

`npm install nightwatch-lambdatest-endlambda`

In your nightwatch configuration file you'll want to update your plugins like so:

> "plugins": ["nightwatch-lambdatest-endlambda"]

## TypeScript Support

To include the types in your project you can either `import 'nightwatch-lambdatest-endlambda'` in your test or in your `nightwatch.d.ts` file.

## Usage

In your `afterEach` before calling `end()` you can call `browser.endLambda()` like so:

```ts
afterEach(function (browser: NightwatchAPI) {
  browser.endLambda()
  browser.end()
})
```

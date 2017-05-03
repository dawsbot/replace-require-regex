# replace-require-regex
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] ![][node-version-image]

> regex based require/import replacements for js files

## Install

```sh
yarn add replace-require-regex
```

## Usage

```js
const replaceRequireRegex = require('replace-require-regex');

replaceRequireRegex(`require('old')`, 'old', 'new');
//=> `require('new')`

replaceRequireRegex(`import a from 'old'`, 'old', 'new');
//=> `import a from 'new'`
```

## API

### replaceRequireRegex(content, from, to)

#### Arguments

| Name    | Description                     |   Type   |  Default  |
| ------- | ------------------------------- | -------- |  -------  |
| content | Could be an entire file content | `string` |   None    |
| from | old string to replace | `string` |   None    |
| to | new string to replace old with | `string` |   None    |

#### Returns

Type: `string`

## License

MIT © [Dawson Botsford](http://dawsonbotsford.com)

[npm-image]: https://badge.fury.io/js/replace-require-regex.svg
[npm-url]: https://npmjs.org/package/replace-require-regex
[travis-image]: https://travis-ci.org/dawsbot/replace-require-regex.svg?branch=master
[travis-url]: https://travis-ci.org/dawsbot/replace-require-regex
[xo-image]: https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[xo-url]: https://github.com/sindresorhus/xo
[node-version-image]: https://img.shields.io/badge/Node-%3E%3Dv4.0.0-ff69b4.svg

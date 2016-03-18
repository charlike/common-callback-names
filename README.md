# [common-callback-names][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> List of common callback names - callback, cb, callback_, next, done.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Install
```
npm i common-callback-names --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
var commonCallbackNames = require('common-callback-names')

console.log(commonCallbackNames)
// => 
// [
//   "callback",
//   "callback_",
//   "cb",
//   "cb_",
//   "done",
//   "next"
// ]
```

### List
> Some of them are used in node core.

**list.json**

```json
[
  "callback",
  "callback_",
  "cb",
  "cb_",
  "done",
  "next"
]
```

## Related
* [function-arguments](https://www.npmjs.com/package/function-arguments): Get arguments of a function, useful for and used in dependency injectors.… [more](https://www.npmjs.com/package/function-arguments) | [homepage](https://github.com/tunnckocore/function-arguments)
* [get-fn-name](https://www.npmjs.com/package/get-fn-name): Get function name with strictness and correctness in mind. Also works for… [more](https://www.npmjs.com/package/get-fn-name) | [homepage](https://github.com/tunnckocore/get-fn-name)
* [is-async-function](https://www.npmjs.com/package/is-async-function): Is function really asynchronous (callback) function? Trying to guess that based on… [more](https://www.npmjs.com/package/is-async-function) | [homepage](https://github.com/tunnckocore/is-async-function)
* [parse-function](https://www.npmjs.com/package/parse-function): Parse a function, arrow function or string to object with name, args,… [more](https://www.npmjs.com/package/parse-function) | [homepage](https://github.com/tunnckocore/parse-function)

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/common-callback-names/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[npmjs-url]: https://www.npmjs.com/package/common-callback-names
[npmjs-img]: https://img.shields.io/npm/v/common-callback-names.svg?label=common-callback-names

[license-url]: https://github.com/tunnckoCore/common-callback-names/blob/master/LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg

[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/common-callback-names
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/common-callback-names.svg

[travis-url]: https://travis-ci.org/tunnckoCore/common-callback-names
[travis-img]: https://img.shields.io/travis/tunnckoCore/common-callback-names/master.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/common-callback-names
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/common-callback-names.svg

[david-url]: https://david-dm.org/tunnckoCore/common-callback-names
[david-img]: https://img.shields.io/david/tunnckoCore/common-callback-names.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg


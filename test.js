/*!
 * common-callback-names <https://github.com/tunnckoCore/common-callback-names>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (https://i.am.charlike.online)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('mukla')
var commonCallbackNames = require('./index')

test('common-callback-names:', function (done) {
  test.ok(commonCallbackNames.length)
  test.ok(commonCallbackNames.length > 5)
  done()
})

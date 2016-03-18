/*!
 * common-callback-names <https://github.com/tunnckoCore/common-callback-names>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var commonCallbackNames = require('./index')

test('common-callback-names:', function (done) {
  test.ok(commonCallbackNames.length)
  test.ok(commonCallbackNames.length > 5)
  done()
})

'use strict';

const browser = require('../mini-testium-mocha').browser;
const assert = require('assertive');
const coroutine = require('bluebird').coroutine;

describe('ssl/tls', () => {
  before(browser.beforeHook());

  it(
    'TLS is supported',
    coroutine(function*() {
      yield browser.navigateTo('https://www.howsmyssl.com/a/check');
      const raw = yield browser.getElement('pre').text();
      const sslReport = JSON.parse(raw);
      assert.match(/^TLS/, sslReport.tls_version);
    })
  );
});

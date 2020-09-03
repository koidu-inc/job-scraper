'use strict';
const { JSDOM } = require('jsdom');

class JSDOMUtils {
  static getDocumentFromHTML(html) {
    const { document } = new JSDOM(html).window;
    return document;
  }
}

module.exports = JSDOMUtils;

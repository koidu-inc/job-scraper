'use strict';

const { EXTRA_SPACES, LINE_BREAKS } = require('../regex');

class TextUtils {
  static clean(text, {} = {}) {
    if (typeof text !== 'string') {
      return text;
    }
    let newText = text;

    // remove line breaks and replace with single space
    newText = newText.replace(LINE_BREAKS, ' ');

    // remove extra spaces and replace with single space
    newText = newText.replace(EXTRA_SPACES, ' ');

    return newText.trim();
  }
}

module.exports = TextUtils;

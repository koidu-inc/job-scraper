'use strict';
const TextUtils = require('./TextUtils');

describe('TextUtils', () => {
  describe('clean', () => {
    test('it should trim the text', () => {
      const result = TextUtils.clean('    should get a trim    ');
      expect(result).toBe('should get a trim');
    });
    test('it should remove extra spaces', () => {
      const result = TextUtils.clean('the extra  spaces get      removed');
      expect(result).toBe('the extra spaces get removed');
    });
    test('it should remove line breaks', () => {
      const result = TextUtils.clean('line breaks should get removed' + '\n' + '\n' + 'from this');
      expect(result).toBe('line breaks should get removed from this');
    });
  });
});

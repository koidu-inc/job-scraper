'use strict';

const fsPromises = require('fs').promises;
const path = require('path');

const TEST_DATA_PATH = path.join(__dirname, '../../test-data');

const JSDOMUtils = require('../utils/JSDOMUtils');
const IndeedParser = require('./IndeedParser');

let document;

describe('IndeedParser', () => {
  beforeAll(async () => {
    const html = await fsPromises.readFile(path.join(TEST_DATA_PATH, 'nodejs-atlanta.html'), {
      encoding: 'utf8',
    });
    document = JSDOMUtils.getDocumentFromHTML(html);
  });
  describe('static parseDocument', () => {
    test('it should correctly parse search results', () => {
      const result = IndeedParser.parseDocument(document);

      expect(result).toHaveLength(15);
      expect(result[0]).toEqual({
        sourceId: 'indeed:jobPosting:6701242c39fd53ab',
        company: 'HUNTER Technical Resources',
        title: 'Software Developer - React, Node',
        url: 'https://www.indeed.com/viewjob?jk=6701242c39fd53ab',
        applyUrl: 'https://www.indeed.com/rc/clk?jk=6701242c39fd53ab&from=vj',
        applyOnJobBoard: true,
        location: 'Atlanta, GA 30308 (Old Fourth Ward area)',
        postDateText: '30+ days ago',
      });
    });
  });
});

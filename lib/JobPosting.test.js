'use strict';

const JobPosting = require('./JobPosting');

describe('JobPosting', () => {
  describe('constructor', () => {
    test('it should set the properties passed in', () => {
      const jobPosting = new JobPosting({
        sourceId: 'example:jobPosting:1234',
        company: 'Koidu',
        title: 'Director of Marketing',
        url: 'https://www.example.com/jobs/1234',
        applyUrl: 'https://www.example.com/jobs/1234/apply',
        applyOnJobBoard: false,
        location: 'Anywhere (Remote)',
        postDateText: '2020/08/01',
      });
      expect(jobPosting).toEqual({
        sourceId: 'example:jobPosting:1234',
        company: 'Koidu',
        title: 'Director of Marketing',
        url: 'https://www.example.com/jobs/1234',
        applyUrl: 'https://www.example.com/jobs/1234/apply',
        applyOnJobBoard: false,
        location: 'Anywhere (Remote)',
        postDateText: '2020/08/01',
      });
    });
  });
});

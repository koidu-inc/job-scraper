'use strict';

const JobPosting = require('./JobPosting');

describe('JobPosting', () => {
  describe('constructor', () => {
    test('it should set the properties passed in', () => {
      const jobPosting = new JobPosting({
        company: 'Koidu',
        title: 'Director of Marketing',
        url: 'https://www.example.com/jobs/1234',
        location: 'Anywhere (Remote)',
        shortSummary: 'Let the world know about our awesome products',
        postDate: '2020/08/01',
      });
      expect(jobPosting).toEqual({
        company: 'Koidu',
        title: 'Director of Marketing',
        url: 'https://www.example.com/jobs/1234',
        location: 'Anywhere (Remote)',
        shortSummary: 'Let the world know about our awesome products',
        postDate: '2020/08/01',
      });
    });
  });
});

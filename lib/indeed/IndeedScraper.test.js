'use strict';

const IndeedScraper = require('./IndeedScraper');

describe('IndeedScraper', () => {
  describe('static createIndeedUrl', () => {
    test('it should create the correct url', () => {
      const result1 = IndeedScraper.createIndeedUrl('/jobs');
      const result2 = IndeedScraper.createIndeedUrl('/jobs', { host: 'https://ca.indeed.com' });

      expect(result1).toBe('https://www.indeed.com/jobs');
      expect(result2).toBe('https://ca.indeed.com/jobs');
    });
  });
  describe('static createSearchJobsUrl', () => {
    test('it should create the correct url', () => {
      const result1 = IndeedScraper.createSearchJobsUrl({ searchTerm: 'Node Js', location: 'Atlanta, GA' });
      const result2 = IndeedScraper.createSearchJobsUrl(
        { searchTerm: 'nodejs', location: 'Montréal, QC' },
        { host: 'https://ca.indeed.com' }
      );
      const result3 = IndeedScraper.createSearchJobsUrl({ searchTerm: 'Node Js', location: 'Atlanta, GA', radius: 5 });

      expect(result1).toBe('https://www.indeed.com/jobs?q=Node+Js&l=Atlanta%2C+GA');
      expect(result2).toBe('https://ca.indeed.com/jobs?q=nodejs&l=Montr%C3%A9al%2C+QC');
      expect(result3).toBe('https://www.indeed.com/jobs?q=Node+Js&l=Atlanta%2C+GA&radius=5');
    });
  });
});

'use strict';

const IndeedUtils = require('./IndeedUtils');

describe('IndeedUtils', () => {
  describe('static createUrl', () => {
    test('it should create the correct url', () => {
      const result1 = IndeedUtils.createUrl('/jobs');
      const result2 = IndeedUtils.createUrl('/jobs', { host: 'https://ca.indeed.com' });

      expect(result1).toBe('https://www.indeed.com/jobs');
      expect(result2).toBe('https://ca.indeed.com/jobs');
    });
  });
  describe('static createSearchJobsUrl', () => {
    test('it should create the correct url', () => {
      const result1 = IndeedUtils.createSearchJobsUrl({ searchTerm: 'Node Js', location: 'Atlanta, GA' });
      const result2 = IndeedUtils.createSearchJobsUrl(
        { searchTerm: 'nodejs', location: 'Montréal, QC' },
        { host: 'https://ca.indeed.com' }
      );
      const result3 = IndeedUtils.createSearchJobsUrl({ searchTerm: 'Node Js', location: 'Atlanta, GA', radius: 5 });

      expect(result1).toBe('https://www.indeed.com/jobs?q=Node+Js&l=Atlanta%2C+GA');
      expect(result2).toBe('https://ca.indeed.com/jobs?q=nodejs&l=Montr%C3%A9al%2C+QC');
      expect(result3).toBe('https://www.indeed.com/jobs?q=Node+Js&l=Atlanta%2C+GA&radius=5');
    });
  });
  describe('static createJobPostingUrl', () => {
    test('it should create the correct url', () => {
      const result1 = IndeedUtils.createJobPostingUrl({ indeedId: 'id1234' });
      const result2 = IndeedUtils.createJobPostingUrl({ indeedId: 'id1234' }, { host: 'https://ca.indeed.com' });

      expect(result1).toBe('https://www.indeed.com/viewjob?jk=id1234');
      expect(result2).toBe('https://ca.indeed.com/viewjob?jk=id1234');
    });
  });
});

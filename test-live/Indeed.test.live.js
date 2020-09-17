'use strict';
const { Scraper } = require('../lib').site.Indeed;

describe('Indeed live test', () => {
  test('it should be able to get job postings', async () => {
    const jobs = await Scraper.searchJobs({ searchTerm: 'Node JS', location: 'Atlanta, GA', radius: 10 });

    expect(jobs.length).toEqual(15); // default seems to be 15
    expect(jobs).toBeDefined();
    expect(jobs[0]).toEqual({
      sourceId: expect.any(String),
      company: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
      applyUrl: expect.any(String),
      applyOnJobBoard: expect.any(Boolean),
      location: expect.any(String),
      postDateText: expect.any(String),
    });
  });
  test('it should be able to get job postings with limit', async () => {
    const jobs = await Scraper.searchJobs({ searchTerm: 'Node JS', location: 'Atlanta, GA', limit: 1 });

    expect(jobs.length).toEqual(1);
    expect(jobs).toBeDefined();
    expect(jobs[0]).toEqual({
      sourceId: expect.any(String),
      company: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
      applyUrl: expect.any(String),
      applyOnJobBoard: expect.any(Boolean),
      location: expect.any(String),
      postDateText: expect.any(String),
    });
  });
});

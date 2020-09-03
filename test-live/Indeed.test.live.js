'use strict';
const { Scraper } = require('../lib').site.Indeed;

describe('Indeed live test', () => {
  test('it should be able to get job postings', async () => {
    const results = await Scraper.searchJobs({ searchTerm: 'Node JS', location: 'Atlanta, GA', radius: 10 });

    expect(results).toBeDefined();
    expect(results[0]).toEqual({
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

'use strict';
const { Indeed } = require('../lib');

describe('Indeed live test', () => {
  test('it should be able to get job postings', async () => {
    const results = await Indeed.searchJobs({ searchTerm: 'Node JS', location: 'Atlanta, GA', radius: 10 });

    expect(results).toBeDefined();
    expect(results[0]).toEqual({
      company: expect.any(String),
      location: expect.any(String),
      postDate: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});

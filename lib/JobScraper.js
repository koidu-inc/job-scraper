'use strict';
const { SITE } = require('./constants');

const scrapers = {
  [SITE.INDEED]: require('./indeed/IndeedScraper'),
};

class Scraper {
  static async searchJobs(site, { searchTerm, location, radius, limit } = {}, { host } = {}) {
    const scraper = scrapers[site];
    const jobs = await scraper.searchJobs({ host, searchTerm, location, radius, limit });
    return jobs;
  }
}

module.exports = Scraper;

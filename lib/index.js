'use strict';

module.exports = {
  // main scraper
  JobScraper: require('./JobScraper'),

  // constants
  constants: require('./constants'),
  CONSTANTS: require('./constants'),

  // scraper exports
  Indeed: require('./indeed/IndeedScraper'),

  // site exports
  site: {
    Indeed: {
      Scraper: require('./indeed/IndeedScraper'),
      Parser: require('./indeed/IndeedParser'),
    },
  },
};

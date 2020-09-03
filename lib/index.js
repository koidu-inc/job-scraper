'use strict';

module.exports = {
  // main scraper
  JobScraper: require('./JobScraper'),

  // constants
  constants: require('./constants'),
  CONSTANTS: require('./constants'),

  // utils
  JSDOMUtils: require('./utils/JSDOMUtils'),
  SourceIDUtils: require('./utils/SourceIDUtils'),
  TextUtils: require('./utils/TextUtils'),

  // site exports
  site: {
    Indeed: {
      Scraper: require('./indeed/IndeedScraper'),
      Parser: require('./indeed/IndeedParser'),
      Utils: require('./indeed/IndeedUtils'),
    },
  },
};

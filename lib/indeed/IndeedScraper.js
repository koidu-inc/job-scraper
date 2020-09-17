// https://www.scrapehero.com/indeed-job-detail-scraper/

'use strict';
const axios = require('axios');
const JSDOMUtils = require('../utils/JSDOMUtils');

const BaseScraper = require('../BaseScraper');
const IndeedParser = require('./IndeedParser');
const IndeedUtils = require('./IndeedUtils');

class IndeedScraper extends BaseScraper {
  static async searchJobs({ searchTerm, location, radius, limit }, { host } = {}) {
    const url = IndeedUtils.createSearchJobsUrl({ host, searchTerm, location, radius, limit });
    // TODO: error handling
    const result = await axios.get(url);
    const document = JSDOMUtils.getDocumentFromHTML(result.data);
    return IndeedParser.parseDocument(document);
  }

  constructor(params = {}) {
    super(params);
  }

  async searchJobs({ searchTerm, location, radius }) {
    const jobs = await IndeedScraper.searchForJobs({ searchTerm, location, radius }, { host: this.host });
    return jobs;
  }
}

module.exports = IndeedScraper;

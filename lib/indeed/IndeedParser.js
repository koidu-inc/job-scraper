'use strict';
const { JSDOM } = require('jsdom');
const TextUtils = require('../utils/TextUtils');

const IndeedScraper = require('./IndeedScraper');

class IndeedParser {
  static parseSearchResults(html) {
    const { document } = new JSDOM(html).window;

    const jobDOMElements = Array.from(document.querySelectorAll('#resultsCol .result'));

    const jobs = [];

    for (const jobDOMElement of jobDOMElements) {
      const jobObj = {};
      const titleDOMElement = jobDOMElement.querySelector('.title a');

      jobObj.company = TextUtils.clean(jobDOMElement.querySelector('.company').textContent);
      jobObj.title = TextUtils.clean(titleDOMElement.textContent);
      jobObj.url = IndeedScraper.createIndeedUrl(titleDOMElement.getAttribute('href'));
      jobObj.location = TextUtils.clean(jobDOMElement.querySelector('.location').textContent);
      jobObj.shortSummary = TextUtils.clean(jobDOMElement.querySelector('.summary').textContent);
      jobObj.postDate = TextUtils.clean(jobDOMElement.querySelector('.date').textContent);

      jobs.push(jobObj);
    }

    return jobs;
  }
}

module.exports = IndeedParser;

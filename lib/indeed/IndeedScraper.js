// https://www.scrapehero.com/indeed-job-detail-scraper/

'use strict';
const { URL, URLSearchParams } = require('url');
const axios = require('axios');
const { JSDOM } = require('jsdom');

const TextUtils = require('../utils/TextUtils');
const JobPosting = require('../JobPosting');
const BaseScraper = require('../BaseScraper');

const DEFAULT_HOST = 'https://www.indeed.com/';

class IndeedScraper extends BaseScraper {
  static createIndeedUrl(urlPath, { host } = {}) {
    return new URL(urlPath, host || DEFAULT_HOST).toString();
  }

  static createSearchJobsUrl({ searchTerm, location, radius }, { host } = {}) {
    const url = new URL('/jobs', host || DEFAULT_HOST);

    // create params
    const params = {};
    if (searchTerm) {
      params.q = searchTerm;
    }
    if (location) {
      params.l = location;
    }
    if (radius) {
      params.radius = radius;
    }

    // set params
    url.search = new URLSearchParams(params);

    return url.toString();
  }

  static async searchJobs({ searchTerm, location, radius }, { host } = {}) {
    const url = IndeedScraper.createSearchJobsUrl({ host, searchTerm, location, radius });
    const result = await axios.get(url);
    // TODO: error handling

    const { document } = new JSDOM(result.data).window;

    const jobDOMElements = Array.from(document.querySelectorAll('#resultsCol .result'));

    const jobs = [];
    for (const jobDOMElement of jobDOMElements) {
      const titleDOMElement = jobDOMElement.querySelector('.title a');

      const jobPosting = new JobPosting({
        company: TextUtils.clean(jobDOMElement.querySelector('.company').textContent),
        title: TextUtils.clean(titleDOMElement.textContent),
        url: IndeedScraper.createIndeedUrl(titleDOMElement.getAttribute('href')),
        location: TextUtils.clean(jobDOMElement.querySelector('.location').textContent),
        summary: TextUtils.clean(jobDOMElement.querySelector('.summary').textContent),
        postDate: TextUtils.clean(jobDOMElement.querySelector('.date').textContent),
      });

      jobs.push(jobPosting);
    }

    return jobs;
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

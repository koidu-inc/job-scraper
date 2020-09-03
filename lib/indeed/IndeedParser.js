'use strict';

const TextUtils = require('../utils/TextUtils');
const SourceIDUtils = require('../utils/SourceIDUtils');
const IndeedUtils = require('./IndeedUtils');
const JobPosting = require('../JobPosting');

class IndeedParser {
  static parseDocument(document) {
    const elements = Array.from(document.querySelectorAll('#resultsCol .result'));
    return elements.map((element) => IndeedParser.parseSearchResultElement(element));
  }

  static parseSearchResultElement(element) {
    const indeedId = element.getAttribute('data-jk');
    const company = element.querySelector('.company').textContent;
    const title = element.querySelector('.title a').textContent;
    const location = element.querySelector('.location').textContent;
    const postDateText = element.querySelector('.date').textContent;
    const applyOnJobBoard = element.querySelector('table.jobCardShelfContainer td.indeedApply') ? true : false;

    return new JobPosting({
      sourceId: SourceIDUtils.create('indeed', 'jobPosting', indeedId),
      company: TextUtils.clean(company),
      title: TextUtils.clean(title),
      url: IndeedUtils.createJobPostingUrl({ indeedId }),
      applyUrl: IndeedUtils.createApplyUrl({ indeedId }),
      applyOnJobBoard,
      location: TextUtils.clean(location),
      postDateText: TextUtils.clean(postDateText),
    });
  }
}

module.exports = IndeedParser;

'use strict';

class JobPosting {
  constructor(params = {}) {
    this.company = params.company;
    this.title = params.title;
    this.url = params.url;
    this.location = params.location;
    this.shortSummary = params.shortSummary;
    this.postDate = params.postDate;
  }
}

module.exports = JobPosting;

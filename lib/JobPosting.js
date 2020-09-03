'use strict';

class JobPosting {
  constructor(params = {}) {
    this.sourceId = params.sourceId;
    this.company = params.company;
    this.title = params.title;
    this.url = params.url;
    this.applyUrl = params.applyUrl;
    this.applyOnJobBoard = params.applyOnJobBoard;
    this.location = params.location;
    this.postDateText = params.postDateText;
  }
}

module.exports = JobPosting;

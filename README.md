# Job Scraper

![NPM](https://img.shields.io/npm/l/@koidu/job-scraper)
![CircleCI](https://img.shields.io/circleci/build/github/koidu-inc/job-scraper/master)
[![npm (scoped)](https://img.shields.io/npm/v/@koidu/job-scraper)](https://www.npmjs.com/package/@koidu/job-scraper)

Scrape major job websites and return the data in a common format

- NOTE: this package is under active development and subject to change until the API is stable in v1.0.0

# Getting Started

## Installation

```
npm install @koidu/job-scraper --save
```

or

```
yarn add @koidu/job-scraper
```

# Usage

Job Scraper returns jobs in a `JobPosting` format.

## `JobPosting`

| key        | description                    |
| ---------- | ------------------------------ |
| `company`  | the company of the job posting |
| `title`    | the title or position          |
| `url`      | the application url            |
| `location` | location of the job            |
| `postDate` | when the job was posted        |

## `JobScraper`

### Example

```javascript
const { JobScraper } = require('@koidu/job-scraper');

async function getJobs() {
  const jobs = await JobScraper.searchJobs('indeed', {
    searchTerm: 'nodejs developer',
    location: 'atlanta, ga',
    radius: '10',
  });
  return jobs;
}
```

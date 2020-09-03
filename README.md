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

| key        | type     | description                                            | example                                              |
| ---------- | -------- | ------------------------------------------------------ | ---------------------------------------------------- |
| `sourceId` | _string_ | the id from the source job board                       | `indeed:jobPosting:11be61a5bcbb4d00`                 |
| `company`  | _string_ | the company of the job posting                         | `Google`                                             |
| `title`    | _string_ | the title or position                                  | `Software Engineer I`                                |
| `url`      | _string_ | the url for the job posting on the job board site      | `https://www.indeed.com/viewjob?jk=11be61a5bcbb4d00` |
| `applyUrl` | _string_ | the url provided by the job board to apply for the job | ``                                                   |
| `location` | _string_ | location of the job                                    | `Atlanta, GA`                                        |
| `postDateText` | _string_ | when the job was posted as a string from the job site  | `5 days ago`                                         |

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

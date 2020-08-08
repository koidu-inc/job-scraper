'use strict';

const fsPromises = require('fs').promises;
const path = require('path');

const TEST_DATA_PATH = path.join(__dirname, '../../test-data');

const IndeedParser = require('./IndeedParser');

describe('IndeedParser', () => {
  let nodeJsAtlantaHtml;
  beforeAll(async () => {
    nodeJsAtlantaHtml = await fsPromises.readFile(path.join(TEST_DATA_PATH, 'nodejs-atlanta.html'), {
      encoding: 'utf8',
    });
  });
  describe('static parseSearchResults', () => {
    test('it should correctly parse search results', () => {
      const result = IndeedParser.parseSearchResults(nodeJsAtlantaHtml);

      expect(result).toHaveLength(15);
      expect(result[0]).toMatchObject({
        company: 'HUNTER Technical Resources',
        location: 'Atlanta, GA 30308 (Old Fourth Ward area)',
        postDate: '30+ days ago',
        title: 'Software Developer - React, Node',
        url:
          'https://www.indeed.com/pagead/clk?mo=r&ad=-6NYlbfkN0CGoSBa7aKtgQ_PsmQOtF-KifHYKH3zHuIe9P9_ehcrzo_UJhGFoOMTUda0TYzjmALXnVrW9sj-ALwsQ0mHujqepUsS2auUYfV_WZ75oPfZG_XxcvWJBczzOvf9mt1ln04VrAK-Q29UlpS3Su29CqwXrql7QN7TiUgW0SN34b3DikbFO4HIkfi-NI87s6FsMMKTZ37uYQeMAB25KhypI7MpDdQAO1mfFoJK7ZmmtACIFxhxca1QwcndWEVssUnsN4G8YYCKVHNFMy-2rd9S6VVmg4SBpe2agO_N_p3h01MhEHOtIq6DWK9K_PGkvrZfxqukKkS---QyjQtssIHPbfwKvqjTwv3bial69xRdRvHJoz9JO6ls4g3m3BnsqwvEmGEY5Hu6SRwa-Mal4Mw2digUbEOkH2QlwFsFExNBQPLYrIuz-U49wk4eZWZdNSdqn8TfLJAaorAcUS1IfrloNgiw62TC8v3xhkElcPk2jb8GKojTWl0gOg8pu3MjjfhEBrwed_Bv8hUMPUCTJmHOP8AGdmEpgrGOP8bDFRO5fitzJ8lqE_U-xxPsv4vbfnKhAYblUtqHpaYT1-ojKrn32I6NX7VBCuhWfCLxlmLYhJdJT6vU_3A_GuAv3IzHAaRjTtUZqRxhnV_3fA==&p=0&fvj=0&vjs=3',
      });
    });
  });
});

const test = require('ava');
const { getEpisodes } = require('~/api');

test('getEpisodes() | Check episode filter', async t => {
  const name = 'Pilot';
  const episode = 'S01E01';
  const response = await getEpisodes({ name, episode });
  const keys = Object.keys(response);

  t.deepEqual(keys, ['info', 'results']);

  response.results.forEach(result => {
    t.is(result.name.includes(name), true);
    t.is(result.episode.includes(episode), true);
  });
});

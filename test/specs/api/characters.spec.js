const test = require('ava');
const { getCharacters } = require('~/api');

test('getCharacters() | Check character filter', async t => {
  const name = 'Morty';
  const gender = 'Male';
  const response = await getCharacters({ name, gender });
  const keys = Object.keys(response);

  t.deepEqual(keys, ['info', 'results']);

  response.results.forEach(result => {
    t.is(result.name.includes(name), true);
    t.is(result.gender.includes(gender), true);
  });
});

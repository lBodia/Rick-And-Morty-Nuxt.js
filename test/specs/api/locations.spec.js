const test = require('ava');
const { getLocations } = require('../../../api');

test('getLocations() | Check location filter', async t => {
  const name = 'Earth';
  const type = 'Planet';
  const response = await getLocations({ name, type });
  const keys = Object.keys(response);

  t.deepEqual(keys, ['info', 'results']);

  response.results.forEach(result => {
    t.is(result.name.includes(name), true);
    t.is(result.type.includes(type), true);
  });
});

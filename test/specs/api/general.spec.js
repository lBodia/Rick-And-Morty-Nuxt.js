const test = require('ava');
const { getCharacters, getEpisodes, getLocations } = require('../../../api');

function check(method) {
  const name = method.name;

  test(`${name}(1) | Check get single item by id`, async t => {
    const response = await method(1);
    t.is(response.id, 1);
  });

  test(`${name}(1) | Check get multiple items by array`, async t => {
    const ids = [1, 3, 5, 7];
    const length = ids.length;
    const response = await method(ids);

    t.is(Array.isArray(response), true);
    t.is(response.length, length);
    response.forEach(item => t.is(ids.includes(item.id), true));
  });

  test(`${name}({page: 2}) | Check pagination`, async t => {
    const response = await method({ page: 2 });

    t.is('next' in response.info, true);
    t.is('prev' in response.info, true);
    t.is(response.info.prev.includes('page=1'), true);
  });

  test(`${name}(2000) | Check 404 response`, async t => {
    const response = await method(2000);
    t.is(response.status, 404);
  });

  test(`${name}(wat) | Check Exception throwing`, async t => {
    await t.throwsAsync(method('wat'), {
      instanceOf: TypeError,
    });
  });
}

check(getCharacters);
check(getEpisodes);
check(getLocations);

import { shallowMount } from '@vue/test-utils';
import test from 'ava';
import CharactersList from '~/components/characters/List.vue';

let wrapper = null;
const items = [{}, {}, {}];

test.before(() => {
  wrapper = shallowMount(CharactersList, {
    propsData: {
      characters: items,
    },
  });
}, 30000);

test('List length', t => {
  t.is(wrapper.findAll('.columns > .column').length, items.length);
});

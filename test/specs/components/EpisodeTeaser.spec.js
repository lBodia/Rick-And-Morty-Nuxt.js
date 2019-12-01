import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import test from 'ava';
import EpisodeTeaser from '~/components/episodes/Teaser.vue';
import '~/plugins/filters';

let wrapper = null;

test.before(() => {
  wrapper = shallowMount(EpisodeTeaser, {
    propsData: {
      episode: {
        id: 1,
        name: 'Test',
        episode: 'S05E02',
      },
    },
    stubs: {
      RouterLink: RouterLinkStub,
    },
  });
}, 30000);

test('Season Number', t => {
  t.is(wrapper.vm.seasonNumber, '05');
});

test('Episode Number', t => {
  t.is(wrapper.vm.episodeNumber, '02');
});

<template>
  <div>
    <h2 v-if="characters.length > 0" data-aos="fade-up">
      Some <span>characters</span>
    </h2>
    <characters-list :characters="characters"></characters-list>

    <h2 v-if="episodes.length > 0" data-aos="fade-up">
      Some <span>episodes</span>
    </h2>
    <episodes-list :episodes="episodes" :show-season="true"></episodes-list>
  </div>
</template>

<script>
import randomIntArray from 'random-int-array';
import CharactersList from '~/components/characters/List';
import EpisodesList from '~/components/episodes/List';
import { getCharacters, getEpisodes } from '~/api';

export default {
  transition: 'fade',

  head() {
    return {
      title: 'Homepage',
    };
  },

  components: {
    CharactersList,
    EpisodesList,
  },

  data() {
    return {
      totalCharacters: 5,
      totalEpisodes: 8,
      characters: [],
      episodes: [],
    };
  },

  async asyncData() {
    try {
      const [characters, episodes] = await Promise.all([
        getCharacters(),
        getEpisodes(),
      ]);

      return {
        totalCharacters: characters.info.count,
        totalEpisodes: episodes.info.count,
      };
    } catch (e) {
      return {};
    }
  },

  created() {
    this.fetchCharacters();
    this.fetchEpisodes();
  },

  methods: {
    async fetchCharacters() {
      const ids = this.getRandomIds(this.totalCharacters, 5);
      this.characters = await getCharacters(ids);
    },

    async fetchEpisodes() {
      const ids = this.getRandomIds(this.totalEpisodes, 8);
      this.episodes = await getEpisodes(ids);
    },

    getRandomIds(max, count) {
      return randomIntArray({
        count,
        max,
        min: 1,
        unique: true,
      });
    },
  },
};
</script>

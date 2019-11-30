<template>
  <div>
    <h2 class="h2">
      Episode <span>{{ episode.name }}</span>
    </h2>

    <div class="columns">
      <div class="column">
        <info-box :value="episode.air_date" title="Premiere Date"></info-box>
      </div>
      <div class="column">
        <info-box :value="episode.episode" title="Season/Number"></info-box>
      </div>
    </div>

    <h2 class="mt4">Episode <span>characters</span></h2>
    <characters-list :characters="characters"></characters-list>
  </div>
</template>

<script>
import detailsPage from '~/mixins/detailsPage.js';
import { getEpisodes, getCharacters } from '~/api';
import CharactersList from '~/components/characters/List';
import InfoBox from '~/components/layout/InfoBox';

export default {
  transition: 'fade',

  components: {
    CharactersList,
    InfoBox,
  },

  mixins: [detailsPage],

  data() {
    return {
      episode: null,
      characters: [],
    };
  },

  async asyncData({ params, error }) {
    try {
      const response = await getEpisodes(parseInt(params.id));

      if (response.error) throw response.error;

      return { episode: response };
    } catch (e) {
      error({ statusCode: 404, message: 'Episode not found' });
    }
  },

  created() {
    this.fetchEpisodes();
  },

  methods: {
    async fetchEpisodes() {
      const ids = this.getIdsFromEndpoints(this.episode.characters);
      const characters = await getCharacters(ids);
      this.characters = Array.isArray(characters) ? characters : [characters];
    },
  },
};
</script>

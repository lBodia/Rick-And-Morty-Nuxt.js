<template>
  <div>
    <h2 data-aos="fade-down">
      <span>{{ character.name }}</span>
    </h2>

    <div class="columns" data-aos="fade-down">
      <div
        class="column is-half-tablet is-one-quarter-desktop has-text-centered"
      >
        <img v-lazy="character.image" alt="" />
      </div>
      <div class="column">
        <div class="columns is-multiline">
          <div class="column is-half">
            <info-box :value="character.status" title="Status"></info-box>
          </div>
          <div class="column is-half">
            <info-box :value="character.species" title="Species"></info-box>
          </div>
          <div class="column is-half">
            <info-box :value="character.gender" title="Gender"></info-box>
          </div>
          <div class="column is-half">
            <info-box :value="character.origin.name" title="Origin"></info-box>
          </div>
          <div class="column">
            <info-box
              :value="character.location.name"
              title="Location"
            ></info-box>
          </div>
        </div>
      </div>
    </div>

    <div class="mt3">
      <episodes-seasons-list :episodes="episodes"></episodes-seasons-list>
    </div>
  </div>
</template>

<script>
import detailsPage from '~/mixins/detailsPage.js';
import { getCharacters, getEpisodes } from '~/api';
import EpisodesSeasonsList from '~/components/episodes/SeasonsList';
import InfoBox from '~/components/layout/InfoBox';

export default {
  transition: 'fade',

  validate({ params }) {
    return !isNaN(+params.id);
  },

  components: {
    EpisodesSeasonsList,
    InfoBox,
  },

  mixins: [detailsPage],

  data() {
    return {
      character: null,
      episodes: [],
    };
  },

  async asyncData({ params, error }) {
    try {
      const response = await getCharacters(parseInt(params.id));

      if (response.error) throw response.error;

      return { character: response };
    } catch (e) {
      error({ statusCode: 404, message: 'Character not found' });
    }
  },

  created() {
    this.fetchCharacters();
  },

  methods: {
    async fetchCharacters() {
      const ids = this.getIdsFromEndpoints(this.character.episode);
      const episodes = await getEpisodes(ids);
      this.episodes = Array.isArray(episodes) ? episodes : [episodes];
    },
  },
};
</script>

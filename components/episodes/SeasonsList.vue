<template>
  <div>
    <div v-for="(seasonEpisodes, season) in seasons" :key="season" class="mb3">
      <h2 data-aos="fade-up">
        Season <span>{{ season | parseInt }}</span>
      </h2>
      <div class="mb4">
        <episodes-list
          :episodes="seasonEpisodes"
          :show-season="false"
        ></episodes-list>
      </div>
    </div>
  </div>
</template>

<script>
import EpisodesList from './List';

export default {
  components: {
    EpisodesList,
  },

  props: {
    episodes: {
      type: Array,
      required: true,
    },
  },

  computed: {
    seasons() {
      return this.episodes.reduce((acc, episode) => {
        const season = episode.episode.substr(1, 2);
        acc[season] = (acc[season] || []).concat(episode);
        return acc;
      }, {});
    },
  },
};
</script>

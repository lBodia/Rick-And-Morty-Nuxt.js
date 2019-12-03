<template>
  <section>
    <episodes-seasons-list :episodes="episodes"></episodes-seasons-list>
    <client-only>
      <infinite-loading
        v-if="page > 1 && canLoad"
        @infinite="infiniteHandler"
      ></infinite-loading>
    </client-only>
    <div v-if="page === 1 && canLoad" class="has-text-centered">
      <button @click="showNextPage" class="button is-primary is-rounded">
        Load More
      </button>
    </div>
  </section>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';
import EpisodesSeasonsList from '~/components/episodes/SeasonsList';
import { getEpisodes } from '~/api';
import infinityLoading from '~/mixins/infinityLoading';

export default {
  components: {
    EpisodesSeasonsList,
    InfiniteLoading,
  },

  mixins: [infinityLoading],

  data() {
    return {
      fetch: getEpisodes,
      episodes: [],
    };
  },

  methods: {
    concatResults(data) {
      this.episodes = this.episodes.concat(data.results);
    },
  },
};
</script>

<style scoped></style>

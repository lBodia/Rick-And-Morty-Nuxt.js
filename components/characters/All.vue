<template>
  <section>
    <h2 data-aos="fade-up">All <span>characters</span></h2>
    <characters-list :characters="characters"></characters-list>
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
import CharactersList from './List.vue';
import { getCharacters } from '~/api';
import infinityLoading from '~/mixins/infinityLoading';

export default {
  components: {
    CharactersList,
    InfiniteLoading,
  },

  mixins: [infinityLoading],

  data() {
    return {
      fetch: getCharacters,
      characters: [],
    };
  },

  methods: {
    concatResults(data) {
      this.characters = this.characters.concat(data.results);
    },
  },
};
</script>

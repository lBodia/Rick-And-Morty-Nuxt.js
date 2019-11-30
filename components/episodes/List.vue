<template>
  <div>
    <div class="columns is-multiline">
      <div
        v-for="(episode, index) in episodes"
        :key="index"
        class="column is-half-tablet is-one-third-desktop is-one-quarter-fullhd"
        data-aos="fade-up"
      >
        <episode-teaser
          :episode="episode"
          :show-season="showSeason"
        ></episode-teaser>
      </div>
    </div>
  </div>
</template>

<script>
import EpisodeTeaser from './Teaser';

export default {
  components: {
    EpisodeTeaser,
  },

  props: {
    episodes: {
      type: Array,
      required: true,
    },

    showSeason: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

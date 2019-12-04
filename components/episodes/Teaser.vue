<template>
  <router-link
    :to="{ name: 'episodes-id', params: { id: episode.id } }"
    :aria-label="ariaLabel"
  >
    <div class="teaser">
      <div class="teaser__number">
        Episode {{ episodeNumber | parseInt }}
        <span v-if="showSeason">| Season {{ seasonNumber | parseInt }}</span>
      </div>
      <div class="teaser__title">{{ episode.name }}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    episode: {
      type: Object,
      required: true,
    },

    showSeason: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      ariaLabel: `Read more about ${this.episode.episode} episode`,
    };
  },

  computed: {
    episodeNumber() {
      return this.episode.episode.substr(4, 2);
    },

    seasonNumber() {
      return this.episode.episode.substr(1, 2);
    },
  },
};
</script>

<style lang="scss" scoped>
.teaser {
  $self: &;
  background: $teaser-background;
  border-radius: 4px;
  text-align: center;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 1rem 2rem;

  &__number {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
    color: $primary;
  }

  &:hover {
    background: $primary;

    #{$self}__number {
      color: $white;
    }
  }
}
</style>

<template>
  <div class="container has-text-centered">
    <div v-if="error.statusCode === 404">
      <div class="error-404">
        <div class="error-404__number" data-aos="slide-left">
          <span>4</span>
        </div>
        <div class="error-404__number" data-aos="zoom-in">
          <random-portal></random-portal>
        </div>
        <div class="error-404__number" data-aos="slide-right">
          <span>4</span>
        </div>
      </div>

      <div data-aos="fade-up">
        <h1 class="mt3 mb2">
          Waba laba dub dub!
          <span v-if="error.message">{{ error.message }}</span>
        </h1>
        <div class="has-text-white">
          Click the portal to travel to the random article!
        </div>
        <nuxt-link
          :to="{ name: 'index' }"
          tag="button"
          class="button is-primary is-rounded mt3"
        >
          Or just go home
        </nuxt-link>
      </div>
    </div>
    <h1 v-else>
      <h1>
        Waba laba dub dub! <span v-if="error.message">{{ error.message }}</span>
      </h1>
    </h1>
  </div>
</template>

<script>
import RandomPortal from '../components/layout/RandomPortal';

export default {
  components: {
    RandomPortal,
  },

  head() {
    return {
      title: this.message,
    };
  },

  props: {
    error: {
      type: Object,
      default: null,
    },
  },

  computed: {
    message() {
      return this.error.message || 'Error';
    },
  },

  layout: 'empty',
};
</script>

<style lang="scss" scoped>
.error-404 {
  display: flex;
  justify-content: center;
  align-items: center;

  &__number {
    span {
      font-size: responsive 8rem 24rem;
      color: $white;
      font-weight: 700;
      line-height: 1;
    }
  }
}
</style>

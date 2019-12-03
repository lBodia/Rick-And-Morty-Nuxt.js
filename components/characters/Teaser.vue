<template>
  <router-link :to="{ name: 'characters-id', params: { id: character.id } }">
    <article class="teaser">
      <div
        @click.prevent="toggleLike(character.id)"
        :class="{ active: isLiked(character.id) }"
        class="teaser__like"
      >
        <font-awesome-icon :icon="['far', 'heart']" />
      </div>
      <div class="teaser__image">
        <img v-lazy="character.image" alt="" />
      </div>
      <header class="teaser__header has-text-centered">
        <div class="teaser__name">
          {{ character.name }}
        </div>
        <div class="teaser__origin">From {{ character.origin.name }}</div>
      </header>
      <div class="teaser__content">
        <table class="table is-fullwidth teaser__characteristics">
          <tr>
            <td>Status</td>
            <td class="has-text-right">{{ character.status }}</td>
          </tr>
          <tr>
            <td>Species</td>
            <td class="has-text-right">{{ character.species }}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td class="has-text-right">{{ character.gender }}</td>
          </tr>
        </table>
      </div>
    </article>
  </router-link>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

library.add(faHeart);

export default {
  props: {
    character: {
      type: Object,
      required: true,
    },
  },

  computed: {
    ...mapGetters({
      isLiked: 'favorites/isCharacterLiked',
    }),
  },

  methods: {
    ...mapMutations({
      toggleLike: 'favorites/toggleCharacter',
    }),
  },
};
</script>

<style lang="scss" scoped>
.teaser {
  position: relative;
  background: $teaser-background;
  transition: all 0.3s ease;
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-1rem);
    }
  }

  &__image {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    position: relative;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      object-fit: cover;
    }
  }

  &__header {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    flex: 1;
  }

  &__content {
    padding: 0 1.5rem 1rem 1.5rem;
  }

  &__characteristics {
    background: transparent;

    td {
      padding: 0.5rem 0;
      border: none;

      &:first-child {
        color: $grey-light;
      }

      &:last-child {
        color: $primary;
      }
    }
  }

  &__name {
    padding: 0;
    justify-content: center;
    font-size: 1.3rem;
    color: $grey-lightest;
  }

  &__origin {
    color: $grey-light;
    margin-top: 0.3rem;
    font-size: 0.9rem;
  }

  &__like {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 10;
    background: $teaser-background;
    border-radius: 50%;
    height: 2.5rem;
    width: 2.5rem;
    color: $white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;

    &.active {
      color: $primary;

      &:hover {
        color: $white;
      }
    }

    &:hover {
      background: $primary;
    }
  }
}
</style>

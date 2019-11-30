<template>
  <div class="columns is-multiline">
    <div
      v-for="(character, index) in characters"
      :key="index"
      class="column is-one-third-desktop is-one-quarter-widescreen is-one-fifth-fullhd mb2"
      data-aos="zoom-in"
    >
      <character-teaser :character="character"></character-teaser>
    </div>
  </div>
</template>

<script>
import CharacterTeaser from './Teaser.vue';

export default {
  components: {
    CharacterTeaser,
  },

  props: {
    characters: {
      type: Array,
      required: true,
    },
  },
};
</script>

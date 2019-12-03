<template>
  <all-characters-list></all-characters-list>
</template>

<script>
import AllCharactersList from '~/components/characters/All.vue';

export default {
  transition: 'fade',

  head() {
    return {
      title: 'All Characters',
    };
  },

  components: {
    AllCharactersList,
  },
};
</script>

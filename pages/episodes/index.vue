<template>
  <div>
    <all-episodes-list></all-episodes-list>
  </div>
</template>

<script>
import AllEpisodesList from '~/components/episodes/All';

export default {
  transition: 'fade',

  head() {
    return {
      title: 'All episodes',
    };
  },

  components: {
    AllEpisodesList,
  },
};
</script>

<template>
  <div>
    <h2>TODO: <span>locations</span></h2>
  </div>
</template>

<script>
export default {
  transition: 'fade',

  asyncData({ error }) {
    error({ statusCode: 404, message: 'This page is not done yet!' });
  },

  head() {
    return {
      title: 'All locations',
    };
  },
};
</script>

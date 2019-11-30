<template>
  <div class="app">
    <layout-sidebar></layout-sidebar>
    <main class="main">
      <div class="container pb4">
        <nuxt />
      </div>
    </main>
  </div>
</template>

<script>
import LayoutSidebar from '~/components/layout/Sidebar';

export default {
  components: {
    LayoutSidebar,
  },
};
</script>

<style lang="scss" scoped>
.app {
  display: flex;
}
.main {
  flex: 1;
  padding: 2rem;
}
</style>

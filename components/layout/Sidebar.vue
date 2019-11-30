<template>
  <aside class="sidebar is-hidden-mobile">
    <nav>
      <ul>
        <li
          v-for="item in navigation"
          :key="item.routeName"
          :class="{ active: isRelativeRoute(item) }"
        >
          <router-link :to="{ name: item.routeName }">
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      navigation: [
        {
          title: 'Home',
          routeName: 'index',
        },
        {
          title: 'Characters',
          routeName: 'characters',
        },
        {
          title: 'Episodes',
          routeName: 'episodes',
        },
        {
          title: 'Locations',
          routeName: 'locations',
        },
      ],
    };
  },

  methods: {
    isRelativeRoute(item) {
      return this.$route.name.includes(item.routeName);
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  background: #1c1e26;
  flex: 0 0 200px;
  position: sticky;
  top: 0;
  left: 0;
  height: 100%;
  min-height: 100vh;
  padding: 2rem;

  ul {
    li {
      text-align: center;
      margin: 1rem 0;

      a {
        color: #5f6165;
        display: block;
        padding: 0.5rem 1rem;
      }

      &.active {
        a {
          color: $white;
          border-radius: 50px;
          background: $primary;
        }
      }
    }
  }
}
</style>

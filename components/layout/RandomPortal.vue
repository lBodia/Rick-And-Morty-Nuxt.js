<template>
  <div @click="enterThePortal" class="portal">
    <div class="portal__cover">
      <img src="~/assets/img/portal/border.png" alt="" />
    </div>
    <div class="portal__enter">
      <div class="test">
        <img src="~/assets/img/portal/center.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { getCharacters, getEpisodes } from '~/api';

export default {
  data() {
    return {
      endpoints: {
        characters: getCharacters,
        episodes: getEpisodes,
      },
    };
  },

  methods: {
    async enterThePortal() {
      const endpoints = Object.keys(this.endpoints);
      const random = endpoints[Math.floor(Math.random() * endpoints.length)];
      const { info } = await this.endpoints[random]();
      const id = Math.floor(Math.random() * info.count) + 1;
      this.$router.push({ name: random + '-id', params: { id } });
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

@keyframes portal {
  from {
    transform: scale(1, 1.1);
  }
  to {
    transform: scale(1.1, 1);
  }
}

.portal {
  position: relative;
  margin: 0 auto;
  display: inline-block;
  cursor: pointer;
  transform: rotate(0deg);
  transition: filter 0.4s ease-out;
  animation: portal 1.5s infinite ease-out alternate;

  &__cover {
    z-index: 2;
    position: relative;
    display: inline-block;
  }

  &__enter {
    position: absolute;
    width: 92%;
    height: 92%;
    top: 4%;
    left: 4%;
    animation: rotation 9s infinite linear;
    animation-play-state: paused;

    .test {
      z-index: 1;
      animation: rotation 6s infinite linear;
    }
  }

  @media (hover: hover) {
    &:hover {
      filter: drop-shadow(0 0 20px $primary);

      .portal__enter {
        animation-play-state: running;
      }
    }
  }
}
</style>

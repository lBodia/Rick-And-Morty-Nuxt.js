<template>
  <div class="info-box">
    <div class="info-box__title">{{ title }}</div>
    <div class="info-box__value">{{ value }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';

.info-box {
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

  &__title {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
    color: $primary;
  }
}
</style>

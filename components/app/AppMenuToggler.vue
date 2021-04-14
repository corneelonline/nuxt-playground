<template>
  <button id="menu-toggler" aria-label="menu" @click="showMainMenu">
    <span class="menu-hamburger">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </span>
  </button>
</template>

<script>
export default {
  methods: {
    showMainMenu() {
      this.$emit('showMainMenu')
    },
  },
}
</script>

<style lang="scss">
// -------------------------------------
// the menu toggler button
// -------------------------------------
#menu-toggler {
  display: flex;
  border: none;
  background: transparent;
  padding: 0;

  &:focus {
    outline: 0;
  }

  @media (min-width: $lg) {
    display: none;
  }

  .banner.active & {
    .icon-bar {
      &:first-child {
        width: 98%;
        transform: rotate(-45deg);
        transform-origin: right top;
        transition: 0.1s all ease-in;
      }
      &:nth-child(2) {
        display: none;
      }
      &:last-child {
        width: 98%;
        transform: rotate(45deg);
        transform-origin: right bottom;
        transition: 0.1s all ease-in;
      }
    }
  }
}
.menu-hamburger {
  display: inline-block;
  width: rem(24);
  height: rem(18);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  .icon-bar {
    width: 100%;
    height: 2px;
    background: var(--color-text-main);
    transition: 0.1s all ease-in;

    &:nth-child(2) {
      width: 80%;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>

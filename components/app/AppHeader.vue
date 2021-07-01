<template>
  <header class="banner" :class="{ active: menuVisible }">
    <a href="#main">Skip to main content</a>
    <AppLogo />
    <AppMenuToggler @showMainMenu="showMainMenu" />
    <MenuMain @hideMainMenu="hideMainMenu" />
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuVisible: false,
    }
  },
  methods: {
    showMainMenu() {
      this.menuVisible = !this.menuVisible
    },
    hideMainMenu() {
      this.menuVisible = false
    },
  },
}
</script>

<style lang="scss">
// -------------------------------------
// the header section
// -------------------------------------
.banner {
  height: var(--banner-height-xs);
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: var(--gutter-sm);
  padding-right: var(--gutter-sm);

  @media (min-width: $md) {
    height: var(--banner-height-md);
    padding-left: var(--gutter-lg);
    padding-right: var(--gutter-lg);
  }
  @media (min-width: $lg) {
    height: var(--banner-height-lg);
  }

  &.active {
    background-color: var(--color-background-body);
    z-index: 2;
  }
}
</style>

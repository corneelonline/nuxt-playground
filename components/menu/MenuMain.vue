<template>
  <nav id="mainnav" class="nav">
    <ul>
      <li @click="hideMainMenu">
        <nuxt-link class="nav__link" to="/" exact>Home</nuxt-link>
      </li>
      <li @click="hideMainMenu">
        <nuxt-link class="nav__link" to="instafeed">Instafeed</nuxt-link>
      </li>
      <li @click="hideMainMenu">
        <nuxt-link class="nav__link" to="blogpost">Blog post</nuxt-link>
      </li>
      <li @click="hideMainMenu">
        <nuxt-link class="nav__link" to="wp-pagina">WP Content</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    hideMainMenu() {
      this.$emit('hideMainMenu')
    },
  },
}
</script>

<style lang="scss">
// -------------------------------------
// the main navigation menu
// -------------------------------------
#mainnav {
  display: none;
  z-index: 1;

  @media (min-width: $lg) {
    width: calc(100% - 240px);
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  ul {
    list-style: none;
  }

  li {
    @media (min-width: $lg) {
      display: inline-block;
    }
  }

  // when toggled active on mobile devices
  .banner.active & {
    position: absolute;
    top: var(--banner-height-xs);
    left: 0;
    width: 100vw;
    height: calc(100vh - var(--banner-height-xs));
    height: 100vh;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: var(--color-white);

    @media (min-width: $md) {
      top: var(--banner-height-md);
      height: calc(100vh - var(--banner-height-md));
      padding-top: 1rem;
    }
  }
  .nav__link {
    font-family: var(--ff-header);
    @include font-size(1.125);
    text-decoration: none;
    color: var(--color-text-main);
    display: inline-block;
    padding: 0 var(--gutter-xs);
    margin: var(--gutter-sm) 0;
    width: 100%;

    @media (min-width: $lg) {
      font-family: var(--ff-body);
      color: var(--color-text-main);
      width: auto;
      margin: 0;
      background-image: none;
    }

    &.nuxt-link-active {
      font-weight: var(--fw-bold);
    }
  }
}
</style>

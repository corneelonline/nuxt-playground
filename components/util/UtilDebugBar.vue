<template>
  <div class="debug-bar">
    <span class="debug-xs">XS</span>
    <span class="debug-sm">SM</span>
    <span class="debug-md">MD</span>
    <span class="debug-lg">LG</span>
    <span class="debug-xl">XL</span>
    <span class="debug-xxl">XXL</span>
  </div>
</template>

<script>
export default {
  name: 'DebugBar',
}
</script>

<style scoped lang="scss">
.debug-bar {
  @include font-size(0.8);
  width: 3rem;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  // display: none;

  @media (min-width: $xs) {
    background: #cceeff;
  }
  @media (min-width: $sm) {
    background: #ffffcc;
  }
  @media (min-width: $md) {
    background: #e6e6ff;
  }
  @media (min-width: $lg) {
    background: #ffcccc;
  }
  @media (min-width: $xl) {
    background: #d9f2d9;
  }
  @media (min-width: $xxl) {
    background: #ffcc99;
  }
}

.debug-xs {
  @media (min-width: $sm) {
    display: none;
  }
}
.debug-sm {
  display: none;
  @media (min-width: $sm) {
    display: block;
  }
  @media (min-width: $md) {
    display: none;
  }
}
.debug-md {
  display: none;
  @media (min-width: $md) {
    display: block;
  }
  @media (min-width: $lg) {
    display: none;
  }
}
.debug-lg {
  display: none;
  @media (min-width: $lg) {
    display: block;
  }
  @media (min-width: $xl) {
    display: none;
  }
}
.debug-xl {
  display: none;
  @media (min-width: $xl) {
    display: block;
  }
  @media (min-width: $xxl) {
    display: none;
  }
}
.debug-xxl {
  display: none;
  @media (min-width: $xxl) {
    display: block;
  }
}
</style>

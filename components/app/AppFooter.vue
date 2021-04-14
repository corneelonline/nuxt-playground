<template>
  <footer class="page-footer">
    <div class="page-footer__legal">
      <p>&copy; {{ new Date().getFullYear() }} Site owner.</p>
    </div>
  </footer>
</template>

<style lang="scss">
.page-footer {
  @include container;
  background-color: var(--color-background-footer);
  font-size: rem(13);

  p {
    margin-bottom: 1em;
  }

  &__legal {
    @media (min-width: $lg) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>

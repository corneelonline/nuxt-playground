<template>
  <div class="page">
    <a href="#main">Skip to main content</a>
    <AppHeader />
    <main id="main">
      <transition name="slide-fade" mode="out-in">
        <Nuxt />
      </transition>
    </main>
    <AppFooter />
    <UtilDebugBar />
  </div>
</template>

<style>
.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>

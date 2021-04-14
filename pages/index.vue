<template>
  <div class="container">
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const page = await $content('hello').fetch()

    return {
      page,
    }
  },
})
</script>

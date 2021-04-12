<template>
  <div class="blogpost">
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
import Prism from '~/plugins/prism'
export default {
  async asyncData({ $content }) {
    const page = await $content('blogpost').fetch()

    return {
      page,
    }
  },
  mounted() {
    Prism.highlightAll()
  },
}
</script>

<style>
.blogpost {
  padding: 50px 25%;
  margin-bottom: 1rem;
}
p {
  margin-bottom: 1.5rem;
}
</style>

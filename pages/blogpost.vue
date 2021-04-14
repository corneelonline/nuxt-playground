<template>
  <div class="container">
    <AppSocialHead
      :title="page.title"
      :description="page.description"
      :path="page.path"
    />
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

<template>
  <div class="page">
    <AppHeader />
    <main id="main">
      <Nuxt />
    </main>
    <AppFooter />
    <AppDebugBar />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    return {
      title: 'Nuxt Playground',
      titleTemplate: '%s | Nuxt Playground',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Nuxt Playground blueprint voor Nuxt projecten.',
        },
        // Twitter
        // Test on: https://cards-dev.twitter.com/validator
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        { hid: 'twitter:site', name: 'twitter:site', content: '@CorneelO' },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: '',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Nuxt Playground',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Nuxt Playground blueprint voor Nuxt projecten.',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: '',
        },

        // Open Graph
        // Test on: https://developers.facebook.com/tools/debug/
        { hid: 'og:site_name', property: 'og:site_name', content: 'Nuxt' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: '',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Nuxt Playground',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Nuxt Playground blueprint voor Nuxt projecten.',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '',
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: '',
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: 'Nuxt Playground',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          hid: 'canonical',
          rel: 'canonical',
          href: process.env.baseUrl,
        },
      ],
      htmlAttrs: {
        lang: 'nl',
      },
    }
  },
})
</script>

<style></style>

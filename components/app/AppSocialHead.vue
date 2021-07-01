<template>
  <span v-if="false" />
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: '',
    },
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        {
          hid: 'image',
          name: 'image',
          content: this.image,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description,
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@TwitterAccount',
        },
        {
          hid: 'twitter:creator',
          name: 'twitter:creator',
          content: '@TwitterAccount',
        },
        {
          hid: 'twitter:image:src',
          name: 'twitter:image:src',
          content: this.image,
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.title,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.image,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: process.env.baseUrl + this.path,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:locale',
          property: 'og:locale',
          content: 'nl_NL',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: process.env.baseUrl + this.path,
        },
      ],
    }
  },
}
</script>

<template>
  <div>
    <h1>Instagram Feed Marco</h1>
    <pre>{{ instafeed }}</pre>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const instafeed = await $axios.$get(
      'https://www.instagram.com/marcoverheul/?__a=1'
    )
    // const nodes = instafeed.graphql.user.edge_owner_to_timeline_media.edges
    return { instafeed }
  },
}
</script>

<style lang="scss" scoped></style>

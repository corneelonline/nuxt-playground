<template>
  <div class="container">
    <h1>{{ page.title }}</h1>
    <section v-for="(block, index) in pageBlocks" :key="'block-' + index">
      <template
        v-if="
          block.fieldGroupName ===
          'page_Acfflexiblecontent_PageBlocks_TextBlock'
        "
      >
        <div v-html="block.textBlockContent"></div>
      </template>
      <template
        v-else-if="
          block.fieldGroupName ===
          'page_Acfflexiblecontent_PageBlocks_ImageBlock'
        "
      >
        <figure>
          <img
            :src="block.imageBlockImage.sourceUrl"
            :alt="block.imageBlockImage.altText"
          />
          <figcaption v-html="block.imageBlockImage.caption"></figcaption>
        </figure>
      </template>
      <template
        v-else-if="
          block.fieldGroupName === 'page_Acfflexiblecontent_PageBlocks_Quote'
        "
      >
        <blockquote>
          <p>{{ block.quoteText }}</p>
          <p>{{ block.quoteFrom }}</p>
        </blockquote>
      </template>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const result = await $axios({
      method: 'POST',
      url: 'https://wpheadless.corneel.online/graphql',
      data: {
        query: `
            {
              pageBy(uri: "marco-testpagina") {
                title
                slug
                acfFlexibleContent {
                  pageBlocks {
                    ... on Page_Acfflexiblecontent_PageBlocks_TextBlock {
                      fieldGroupName
                      textBlockContent
                    }
                    ... on Page_Acfflexiblecontent_PageBlocks_ImageBlock {
                      fieldGroupName
                      imageBlockImage {
                        sourceUrl
                        altText
                        caption(format: RENDERED)
                      }
                    }
                    ... on Page_Acfflexiblecontent_PageBlocks_Quote {
                      fieldGroupName
                      quoteFrom
                      quoteText
                    }
                  }
                }
              }
            }`,
      },
    })
    const page = result.data.data.pageBy
    const pageBlocks = result.data.data.pageBy.acfFlexibleContent.pageBlocks
    return {
      page,
      pageBlocks,
    }
  },
}
</script>

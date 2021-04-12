---
title: Example with code block
description: 'Example blogpost containing a code block that must be rendered with syntax highlighting'
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices elit et metus sollicitudin congue. Fusce dictum elementum diam, vitae ornare massa suscipit at. Aliquam et viverra nunc. Aliquam erat volutpat. Maecenas consequat eu turpis imperdiet interdum. Curabitur pretium nulla leo, at aliquet nunc pellentesque vel. Ut sollicitudin arcu egestas libero cursus, sit amet hendrerit mi feugiat.

```vue
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
  }
}
</script>
```

Sed erat tortor, molestie dignissim vulputate a, auctor id arcu. Aliquam ut scelerisque sem. Praesent dapibus ultrices gravida. Ut cursus, leo id fermentum malesuada, erat mauris feugiat turpis, quis condimentum leo est et nisl.

```css
.blogpost {
  padding: 50px 25%;
}
p {
  margin-bottom: 1.5rem;
}
```

Sed consectetur neque vitae augue pharetra, eget dignissim lacus gravida. Aliquam eget cursus turpis, ut commodo orci. Praesent pretium nunc libero, a suscipit velit fermentum nec. Suspendisse diam sem, lobortis vitae lorem vel, faucibus sollicitudin ligula.

Integer efficitur tincidunt ligula, a imperdiet velit ultricies ac. Suspendisse dictum egestas metus a placerat. Vivamus iaculis aliquam turpis eu malesuada. Integer vel nulla eget orci venenatis dapibus. Donec vitae nulla sagittis, vulputate libero eget, fermentum risus. Aliquam ullamcorper condimentum leo eu tristique. Cras non tortor massa. Nullam hendrerit dolor in dictum posuere. Phasellus suscipit orci commodo leo ultrices vehicula.

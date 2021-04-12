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

Sed consequat orci et nibh accumsan, finibus lobortis libero sagittis. Fusce congue sem vitae tortor rhoncus vulputate. Fusce in sagittis eros, at ullamcorper metus. Fusce eu congue urna. Suspendisse ac rhoncus augue. Suspendisse vulputate nunc id justo molestie ornare. Aliquam varius odio in iaculis rhoncus. Suspendisse vel nunc velit. Suspendisse eu rhoncus justo, a dapibus ex.

Suspendisse tempus venenatis sagittis. In odio nisl, pulvinar ut aliquam a, cursus sed velit. Phasellus semper ipsum eget hendrerit eleifend. Maecenas in augue mattis, vehicula tellus ac, blandit nunc. Sed tincidunt eros tellus, vitae rhoncus odio iaculis quis. Suspendisse at efficitur nulla. Nam gravida, mi sit amet posuere consequat, purus mauris sollicitudin sapien, eget volutpat nisi est ac ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras et neque finibus, scelerisque elit ut, pulvinar orci. Morbi pulvinar, nunc ut tempor condimentum, quam enim tristique nulla, id cursus enim metus non lacus. Aenean dignissim elit sit amet lorem dignissim feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque ut ultrices sem, quis condimentum neque. Maecenas nulla nibh, aliquam quis ultrices et, molestie efficitur nisi.

Nullam nec pretium nulla. Donec sit amet elementum ligula, nec feugiat ipsum. Proin ut purus a nisl efficitur finibus. Maecenas non convallis tellus. Donec cursus congue nisi, in suscipit ex cursus at. In at malesuada nisl, ut venenatis nisi. Morbi purus risus, sodales in metus eu, porttitor semper ante. Vivamus vitae aliquet purus. Vivamus dignissim fringilla elit id ultricies. Curabitur varius libero orci, at imperdiet orci pretium in. Vivamus dictum eleifend ipsum eu viverra. Vivamus imperdiet felis dapibus turpis bibendum hendrerit. Maecenas interdum nisl sit amet magna facilisis, egestas suscipit sem iaculis.

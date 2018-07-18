# vue-share-social

## Usage

### Add Plugin
```js
import Vue from 'vue'
import VueShareSocial from 'vue-share-social'

Vue.use(VueShareSocial)
```

or

### Use Component
```html
<template>
  <div>
    <ShareFacebook
     url="http://recruit.istyle.co.jp/career/"
    />
  </div>
</template>

<script>
import { ShareFacebook } from 'vue-share-social'

export default {
  components: {
    ShareFacebook
  }
}
</script>
```


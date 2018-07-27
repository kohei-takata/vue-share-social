<template>
  <a @click.prevent="openShareWindow">
    GooglePlus Share
  </a>
</template>

<script>
import {defaultHref} from '@/utils/defaultHref.js'

export default {
  name: 'ShareGooglePlus',
  props: {
    url: {
      type: String,
      default: defaultHref
    },
    windowWidth: {
      type: Number,
      default: 640
    },
    windowHeight: {
      type: Number,
      default: 640
    }
  },
  methods: {
    openShareWindow () {
      let width = this.$props.windowWidth
      let height = this.$props.windowHeight
      let left = (screen.width / 2) - (width / 2)
      let top = (screen.height / 2) - (height / 2)
      const windowConfig = `width=${width},height=${height},left=${left},top=${top},`
      const shareUrl = `https://plus.google.com/share?url=${encodeURIComponent(this.$props.url)}`
      return window.open(
        shareUrl,
        `Share this`,
        `${windowConfig}toolbar=no,menubar=no,scrollbars=no`
      )
    }
  }
}
</script>

<template>
  <a @click.prevent="openShareWindow">
    Line Good
  </a>
</template>

<script>
import {defaultHref} from '@/utils/defaultHref.js'

export default {
  name: 'ShareLine',
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
      const shareUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(this.$props.url)}`
      return window.open(
        shareUrl,
        `Share this`,
        `${windowConfig}toolbar=no,menubar=no,scrollbars=no`
      )
    }
  }
}
</script>

<template>
  <a @click.prevent="openShareWindow">
    Facebook Share
    {{ count }}
  </a>
</template>

<script>
import { defaultHref } from '@/utils/defaultHref.js'

export default {
  name: 'ShareFacebook',
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
  data () {
    return {
      count: 0
    }
  },
  mounted () {
    this.getShareCount()
  },
  methods: {
    openShareWindow () {
      let width = this.$props.windowWidth
      let height = this.$props.windowHeight
      let left = (screen.width / 2) - (width / 2)
      let top = (screen.height / 2) - (height / 2)
      const windowConfig = `width=${width},height=${height},left=${left},top=${top},`
      const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.$props.url)}`
      return window.open(
        shareUrl,
        `Share this`,
        `${windowConfig}toolbar=no,menubar=no,scrollbars=no`
      )
    },

    getShareCount () {
      const script = document.createElement('script')
      const randomInt = Math.floor(Math.random() * (1000 + 1 - 1) + 1)
      const callback = `vue_share_socoal_${randomInt}`

      script.src = `https://graph.facebook.com?id=${encodeURIComponent(this.$props.url)}&callback=${callback}`

      document.body.appendChild(script)

      window[callback] = count => {
        if (count.share) {
          this.count = (count.share.share_count >= 1000)
            ? (count.share.share_count / 1000).toFixed(1) + 'k'
            : count.share.share_count
        }
      }
    }
  }
}
</script>

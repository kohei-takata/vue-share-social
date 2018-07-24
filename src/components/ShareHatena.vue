<template>
  <a @click.prevent="openShareWindow">
    Hatena Bookmark
    {{ count }}
  </a>
</template>

<script>
import {defaultHref} from '@/utils/defaultHref.js'

export default {
  name: 'ShareHatena',
  props: {
    url: {
      type: String,
      default: defaultHref
    },
    title: {
      type: String,
      default: ''
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
    this.getBookmarkCount()
  },
  methods: {
    openShareWindow () {
      let width = this.$props.windowWidth
      let height = this.$props.windowHeight
      let left = (screen.width / 2) - (width / 2)
      let top = (screen.height / 2) - (height / 2)
      const windowConfig = `width=${width},height=${height},left=${left},top=${top},`
      const shareUrl = `http://b.hatena.ne.jp/add?url=${encodeURIComponent(this.$props.url)}&title=${encodeURIComponent(this.$props.title)}`
      return window.open(
        shareUrl,
        `Share this`,
        `${windowConfig}toolbar=no,menubar=no,scrollbars=no`
      )
    },

    getBookmarkCount () {
      const script = document.createElement('script')
      const randomInt = Math.floor(Math.random() * (1000 + 1 - 1) + 1)
      const callback = `vue_share_socoal_${randomInt}`

      script.src = `http://api.b.st-hatena.com/entry.count?url=${encodeURIComponent(this.$props.url)}&callback=${callback}`

      document.body.appendChild(script)

      window[callback] = count => {
        if (count) {
          this.count = (count >= 1000)
            ? (count / 1000).toFixed(1) + 'k'
            : count
        }
      }
    }
  }
}
</script>

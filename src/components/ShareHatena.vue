<template>
  <a class="hatena--btn"
    :class="btnClass"
    :style="btnStyle"
    @click.prevent="openShareWindow">
    <RippleEffect :clickEvent="clickEvent"/>
    <span
      v-if="count !== 0">
      {{ count }}
    </span>
    <HatenaLogo
      :width="icon.width"
      :height="icon.height"
      color="#FFFFFF"
      v-if="count === 0"/>
  </a>
</template>

<script>
import { size } from '../utils/enums.js'
import buttonProps from '../utils/buttonProps.js'
import RippleEffect from './RippleEffect.vue'
import HatenaLogo from './svg/HatenaLogo.vue'

export default {
  name: 'ShareHatena',
  mixins: [buttonProps],
  components: {
    RippleEffect,
    HatenaLogo
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      icon: {
        width: 12,
        height: 12
      },
      count: 0,
      clickEvent: null
    }
  },
  created () {
    this.setIconSize()
  },
  mounted () {
    this.getBookmarkCount()
  },
  methods: {
    setIconSize () {
      switch (this.size) {
        case size.m:
          this.icon = {width: 16, height: 16}
          break
        case size.l:
          this.icon = {width: 20, height: 20}
      }
    },
    openShareWindow (e) {
      this.clickEvent = e
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

<style scoped>
.hatena--btn {
  text-align: center;
  background-color: #00a4de;
  cursor: pointer;
}
.hatena--btn > span {
  color: #ffffff;
}
.hatena--btn.s {
  font-size: 10px;
  line-height: 28px;
}
.hatena--btn.m {
  font-size: 13px;
  line-height: 38px;
}
.hatena--btn.l {
  font-size: 16px;
  line-height: 46px;
}
.hatena--btn > svg {
  vertical-align: middle;
}
</style>

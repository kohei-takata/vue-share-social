<template>
  <a class="facebook--btn"
    :class="btnClass"
    :style="btnStyle"
    @click.prevent="openShareWindow">
    <RippleEffect :clickEvent="clickEvent"/>
    <span
      v-if="count !== 0">
      {{ count }}
    </span>
    <FacebookLogo
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
import FacebookLogo from './svg/FacebookLogo.vue'

export default {
  name: 'ShareFacebook',
  mixins: [buttonProps],
  components: {
    RippleEffect,
    FacebookLogo
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
    this.getShareCount()
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

<style scoped>
.facebook--btn {
  text-align: center;
  background-color: #4267b2;
  cursor: pointer;
}
.facebook--btn > span {
  color: #ffffff;
}
.facebook--btn.s {
  font-size: 10px;
  line-height: 28px;
}
.facebook--btn.m {
  font-size: 13px;
  line-height: 38px;
}
.facebook--btn.l {
  font-size: 16px;
  line-height: 46px;
}
.facebook--btn > svg {
  vertical-align: middle;
}
</style>

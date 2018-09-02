<template>
  <a class="twitter--btn"
    :class="btnClass"
    :style="btnStyle"
    @click.prevent="openShareWindow">
    <RippleEffect :clickEvent="clickEvent"/>
    <TwitterLogo
      :width="icon.width"
      :height="icon.height"
      color="#FFFFFF"/>
  </a>
</template>

<script>
import { size } from '../utils/enums.js'
import buttonProps from '../utils/buttonProps.js'
import RippleEffect from './RippleEffect.vue'
import TwitterLogo from './svg/TwitterLogo.vue'

export default {
  name: 'ShareTwitter',
  mixins: [buttonProps],
  components: {
    RippleEffect,
    TwitterLogo
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
      clickEvent: null
    }
  },
  created () {
    this.setIconSize()
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
      const shareUrl = `https://twitter.com/share?url=${encodeURIComponent(this.$props.url)}&text=${encodeURIComponent(this.$props.title)}`
      return window.open(
        shareUrl,
        `Share this`,
        `${windowConfig}toolbar=no,menubar=no,scrollbars=no`
      )
    }
  }
}
</script>

<style scoped>
.twitter--btn {
  text-align: center;
  background-color: #1da1f2;
  cursor: pointer;
}
.twitter--btn > span {
  color: #ffffff;
}
.twitter--btn.s {
  font-size: 10px;
  line-height: 28px;
}
.twitter--btn.m {
  font-size: 13px;
  line-height: 38px;
}
.twitter--btn.l {
  font-size: 16px;
  line-height: 46px;
}
.twitter--btn > svg {
  vertical-align: middle;
}
</style>

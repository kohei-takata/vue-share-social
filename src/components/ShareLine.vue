<template>
  <a class="line--btn"
    :class="btnClass"
    :style="btnStyle"
    @click.prevent="openShareWindow">
    <RippleEffect :clickEvent="clickEvent"/>
    <LineLogo
      :width="icon.width"
      :height="icon.height"
      color="#FFFFFF"/>
  </a>
</template>

<script>
import { size } from '../utils/enums.js'
import buttonProps from '../utils/buttonProps.js'
import RippleEffect from './RippleEffect.vue'
import LineLogo from './svg/LineLogo.vue'

export default {
  name: 'ShareLine',
  mixins: [buttonProps],
  components: {
    RippleEffect,
    LineLogo
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

<style scoped>
.line--btn {
  text-align: center;
  background-color: #00c300;
  cursor: pointer;
}
.line--btn > span {
  color: #ffffff;
}
.line--btn.s {
  font-size: 10px;
  line-height: 28px;
}
.line--btn.m {
  font-size: 13px;
  line-height: 38px;
}
.line--btn.l {
  font-size: 16px;
  line-height: 46px;
}
.line--btn > svg {
  vertical-align: middle;
}
</style>

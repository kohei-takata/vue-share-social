<template>
  <span
    v-if="isShow"
    class="ripple"
    :style="style">
  </span>
</template>

<script>
export default {
  name: 'RippleEffect',
  props: {
    clickEvent: {
      required: true
    }
  },
  data () {
    return {
      isShow: false,
      style: {
        top: '0px',
        left: '0px',
        width: '0px',
        height: '0px'
      }
    }
  },
  methods: {
    deleteRipple () {
      setTimeout(() => {
        this.isShow = false
        this.style = {
          top: '0px',
          left: '0px',
          width: '0px',
          height: '0px'
        }
      }, 2000)
    }
  },
  watch: {
    clickEvent (e) {
      this.isShow = true
      this.deleteRipple()
      let coversize = this.$parent.$el.offsetWidth
      let loc = this.$parent.$el.getBoundingClientRect()
      let x = e.pageX - loc.left - window.pageXOffset - (coversize / 2)
      let y = e.pageY - loc.top - window.pageYOffset - (coversize / 2)
      this.style = {
        top: `${y}px`,
        left: `${x}px`,
        width: `${coversize}px`,
        height: `${coversize}px`
      }
    }
  }
}
</script>

<style scoped>
.ripple {
  position: absolute;
  border-radius: 50%;
  opacity: 0.5;
  transform: scale(0);
  background: #FFFFFF;
  animation: ripple 700ms;
  pointer-events: none;
}

@-webkit-keyframes ripple {
  to {
    opacity: 0;
    transform: scale(2.0);
  }
}

@keyframes ripple {
  to {
    opacity: 0;
    transform: scale(2.0);
  }
}
</style>

export default {
  props: {
    width: {
      type: Number,
      default: 25
    },
    height: {
      type: Number,
      default: 25
    }
  },
  data () {
    return {
      style: {
        width: `${this.$props.width}px`,
        height: `${this.$props.height}px`
      }
    }
  }
}

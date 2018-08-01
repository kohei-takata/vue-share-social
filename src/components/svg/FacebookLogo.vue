<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430.113 430.114" :style="style">
    <path :fill="color" d="M158.081,83.3c0,10.839,0,59.218,0,59.218h-43.385v72.412h43.385v215.183h89.122V214.936h59.805
      c0,0,5.601-34.721,8.316-72.685c-7.784,0-67.784,0-67.784,0s0-42.127,0-49.511c0-7.4,9.717-17.354,19.321-17.354
      c9.586,0,29.818,0,48.557,0c0-9.859,0-43.924,0-75.385c-25.016,0-53.476,0-66.021,0C155.878-0.004,158.081,72.48,158.081,83.3z"/>
  </svg>
</template>

<script>
import svgProps from '../../utils/svgProps.js'

export default {
  mixins: [svgProps],
  props: {
    color: {
      type: String,
      default: '#4267b2'
    }
  }
}
</script>

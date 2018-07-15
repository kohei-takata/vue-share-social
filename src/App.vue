<template>
  <div id="app">
    <ShareFacebook
     url="http://recruit.istyle.co.jp/career/"
    />
  </div>
</template>

<script>
import ShareFacebook from '@/components/ShareFacebook.vue'

export default {
  name: 'app',
  components: {
    ShareFacebook
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

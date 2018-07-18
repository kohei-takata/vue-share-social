<template>
  <div id="app">
    <ShareFacebook
     url="http://recruit.istyle.co.jp/career/"
    />
    <ShareTwitter
            url="http://recruit.istyle.co.jp/career/"
            title="recruit page"
    />
  </div>
</template>

<script>
import ShareFacebook from '@/components/ShareFacebook.vue'
import ShareTwitter from '@/components/ShareTwitter.vue'

export default {
  name: 'app',
  components: {
    ShareFacebook,
    ShareTwitter
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

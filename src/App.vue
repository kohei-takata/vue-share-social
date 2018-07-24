<template>
  <div id="app">
    <ShareFacebook
      url="http://recruit.istyle.co.jp/career/"
    />
    <ShareTwitter
      url="http://recruit.istyle.co.jp/career/"
      title="recruit page"
    />
    <ShareHatena
      url="http://recruit.istyle.co.jp/career/"
      title="recruit page"
    />

    <div>
      <FacebookLogo/>
      <TwitterLogo/>
      <HatenaLogo/>
      <GooglePlusLogo/>
      <LineLogo/>
    </div>
  </div>
</template>

<script>
import ShareFacebook from '@/components/ShareFacebook.vue'
import ShareTwitter from '@/components/ShareTwitter.vue'
import ShareHatena from '@/components/ShareHatena.vue'

import FacebookLogo from '@/components/svg/FacebookLogo.vue'
import TwitterLogo from '@/components/svg/TwitterLogo.vue'
import GooglePlusLogo from '@/components/svg/GooglePlusLogo.vue'
import HatenaLogo from '@/components/svg/HatenaLogo.vue'
import LineLogo from '@/components/svg/LineLogo.vue'

export default {
  name: 'app',
  components: {
    ShareFacebook,
    ShareTwitter,
    ShareHatena,
    FacebookLogo,
    TwitterLogo,
    GooglePlusLogo,
    HatenaLogo,
    LineLogo
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

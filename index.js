import ShareFacebook from './src/components/ShareFacebook.vue'
import ShareTwitter from './src/components/ShareTwitter.vue'
import ShareHatena from './src/components/ShareHatena.vue'
import ShareLine from './src/components/ShareLine.vue'
import ShareGooglePlus from './src/components/ShareGooglePlus.vue'

const VueShareSocial = {}

VueShareSocial.install = (Vue, options) => {
  Vue.mixin({
    components: {
      ShareFacebook,
      ShareTwitter,
      ShareHatena,
      ShareLine,
      ShareGooglePlus
    }
  })
}
export default VueShareSocial

export {
  ShareFacebook,
  ShareTwitter,
  ShareHatena,
  ShareLine,
  ShareGooglePlus
}

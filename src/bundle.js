import ShareFacebook from '@/components/ShareFacebook.vue'
import ShareTwitter from '@/components/ShareTwitter.vue'
import ShareHatena from '@/components/ShareHatena.vue'
import ShareLine from '@/components/ShareLine.vue'
import ShareGooglePlus from '@/components/ShareGooglePlus.vue'

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

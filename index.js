import ShareFacebook from '@/components/ShareFacebook.vue'
import ShareTwitter from '@/components/ShareTwitter.vue'
import ShareHatena from '@/components/ShareHatena.vue'
import ShareLine from '@/components/ShareLine.vue'

const VueShareSocial = {}

VueShareSocial.install = (Vue, options) => {
  Vue.mixin({
    components: {
      ShareFacebook,
      ShareTwitter,
      ShareHatena,
      ShareLine
    }
  })
}
export default VueShareSocial

export {
  ShareFacebook,
  ShareTwitter,
  ShareHatena,
  ShareLine
}

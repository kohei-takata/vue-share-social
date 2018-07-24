import ShareFacebook from '@/components/ShareFacebook.vue'
import ShareTwitter from '@/components/ShareTwitter.vue'
import ShareHatena from '@/components/ShareHatena.vue'

const VueShareSocial = {}

VueShareSocial.install = (Vue, options) => {
  Vue.mixin({
    components: {
      ShareFacebook,
      ShareTwitter,
      ShareHatena
    }
  })
}
export default VueShareSocial

export {
  ShareFacebook,
  ShareTwitter,
  ShareHatena
}

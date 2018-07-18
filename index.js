import ShareFacebook from '@/components/ShareFacebook.vue'
import ShareTwitter from '@/components/ShareTwitter.vue'

const VueShareSocial = {}

VueShareSocial.install = (Vue, options) => {
  Vue.mixin({
    components: {
      ShareFacebook
    }
  })
}
export default VueShareSocial

export {
  ShareFacebook,
  ShareTwitter
}

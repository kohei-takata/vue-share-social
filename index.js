import ShareFacebook from '@/components/ShareFacebook.vue'

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
  ShareFacebook
}

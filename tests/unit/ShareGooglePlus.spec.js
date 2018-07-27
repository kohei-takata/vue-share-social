import { shallowMount } from '@vue/test-utils'
import ShareTwitter from '@/components/ShareGooglePlus.vue'

describe('ShareGooglePlus.vue', () => {
  it('renders html when passed', () => {
    const wrapper = shallowMount(ShareTwitter, {
      propsData: {
        url: 'http://recruit.istyle.co.jp/career/'
      }
    })
    let html = `<a>
  GooglePlus Share
</a>`
    expect(wrapper.html()).toMatch(html)
  })
})

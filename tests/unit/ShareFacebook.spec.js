import { shallowMount } from '@vue/test-utils'
import ShareFacebook from '@/components/ShareFacebook.vue'

describe('ShareFacebook.vue', () => {
  it('renders html when passed', () => {
    const wrapper = shallowMount(ShareFacebook, {
      propsData: {
        url: 'http://recruit.istyle.co.jp/career/'
      }
    })
    let html = `<a>
  Facebook Share
  0
</a>`
    expect(wrapper.html()).toMatch(html)
  })
})

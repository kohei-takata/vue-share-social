import { shallowMount } from '@vue/test-utils'
import ShareTwitter from '@/components/ShareTwitter.vue'

describe('ShareTwitter.vue', () => {
  it('renders html when passed', () => {
    const wrapper = shallowMount(ShareTwitter, {
      propsData: {
        url: 'http://recruit.istyle.co.jp/career/'
      }
    })
    let html = `<a>
  Twitter Share
</a>`
    expect(wrapper.html()).toMatch(html)
  })
})

import { shallowMount } from '@vue/test-utils'
import ShareHatena from '@/components/ShareHatena.vue'

describe('ShareHatena.vue', () => {
  it('renders html when passed', () => {
    const wrapper = shallowMount(ShareHatena, {
      propsData: {
        url: 'http://test.com/test'
      }
    })
    let html = `<a>
  Hatena Bookmark
  0
</a>`
    expect(wrapper.html()).toMatch(html)
  })
})

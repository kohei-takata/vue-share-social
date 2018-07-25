import { shallowMount } from '@vue/test-utils'
import ShareLine from '@/components/ShareLine.vue'

describe('ShareLine.vue', () => {
  it('renders html when passed', () => {
    const wrapper = shallowMount(ShareLine, {
      propsData: {
        url: 'http://recruit.istyle.co.jp/career/'
      }
    })
    let html = `<a>
  Line Send
</a>`
    expect(wrapper.html()).toMatch(html)
  })
})

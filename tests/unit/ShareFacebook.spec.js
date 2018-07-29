import { shallowMount } from '@vue/test-utils'
import ShareFacebook from '@/components/ShareFacebook.vue'

describe('ShareFacebook.vue', () => {
  it('renders html when passed', () => {
    const wrapper = shallowMount(ShareFacebook, {
      propsData: {
        url: 'http://recruit.istyle.co.jp/career/'
      }
    })
    let html = `<a class="facebook--btn m circle" style="width: 35px; height: 35px; display: inline-block; border-radius: 50%; box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12);"><ripple-stub></ripple-stub> <!----> <facebooklogo-stub width="16" height="16"></facebooklogo-stub></a>`
    expect(wrapper.html()).toMatch(html)
  })
})

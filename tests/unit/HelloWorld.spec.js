import { shallowMount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import ElementPlus from 'element-plus';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('renders props.msg when passed', () => {
    const msg = 'Hello, Vite!';
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
      global: {
        plugins: [ElementPlus, createPinia()]
      }
    });
    expect(wrapper.text()).toContain(msg);
  });
});
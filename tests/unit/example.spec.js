import { shallowMount } from '@vue/test-utils';
import MainSection from '@/components/HeaderSection.vue';

describe('HeaderSection.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(MainSection, {
    });
    expect(wrapper.find('h1').text()).toMatch('Павел Дубицкий');
  });
});

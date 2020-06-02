import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import MyButton from './MyButton.vue';

export default {
  title: 'MyButton',
  decorators: [withKnobs],
};

export const Basic = () => ({
  components: { MyButton },
  template: '<my-button @click="onClick" :label="label" />',
  props: {
    label: {
      default: text('Label', 'hoge'),
    },
  },
  methods: {
    onClick: action('click'),
  },
});

export const ChangeLabel = () => ({
  components: { MyButton },
  template: '<my-button label="hoge" @click="onClick" />',
  methods: {
    onClick: action('click'),
  },
});

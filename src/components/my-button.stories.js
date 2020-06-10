import { withKnobs, text } from '@storybook/addon-knobs';

import MyButton from './MyButton.vue';

export default {
  title: 'MyButton',
  decorators: [withKnobs],
};

export const Basic = () => ({
  components: { MyButton },
  template: '<my-button :label="label" />',
  props: {
    label: {
      default: text('Label', 'hoge'),
    },
  },
});

export const ChangeLabel = () => ({
  components: { MyButton },
  template: '<my-button label="hoge" />',
});

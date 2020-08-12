import { action } from '@storybook/addon-actions';

import MyButton from './MyButton.vue';

export default {
  title: 'MyButton',
  component: MyButton,
  argTypes: {
    label: {
      description: 'labelの説明',
    },
  },
};

export const Basic = (args, { argTypes }) => ({
  components: { MyButton },
  template: '<my-button @click="onClick" :label="label" />',
  props: Object.keys(argTypes),
  methods: {
    onClick: action('click'),
  },
});

export const ChangeLabel = (args, { argTypes }) => ({
  components: { MyButton },
  template: '<my-button @click="onClick" :label="label" />',
  props: Object.keys(argTypes),
  methods: {
    onClick: action('click'),
  },
});
ChangeLabel.args = {
  label: 'hoge',
};

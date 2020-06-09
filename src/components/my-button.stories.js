import { action } from '@storybook/addon-actions';

import MyButton from './MyButton.vue';

export default {
  title: 'MyButton',
  component: MyButton,
};

export const Basic = (args) => ({
  components: { MyButton },
  template: '<my-button @click="onClick" :label="label" />',
  data() {
    return args;
  },
  methods: {
    onClick: action('click'),
  },
});

export const ChangeLabel = (args) => ({
  components: { MyButton },
  template: '<my-button @click="onClick" :label="label" />',
  data() {
    return args;
  },
  methods: {
    onClick: action('click'),
  },
});
ChangeLabel.argTypes = {
  label: { defaultValue: 'hoge' },
};

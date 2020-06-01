import { action } from '@storybook/addon-actions';
import MyButton from './MyButton.vue';

export default {
  title: 'MyButton',
};

export const Basic = () => ({
  components: { MyButton },
  template: '<my-button @click="onClick" />',
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

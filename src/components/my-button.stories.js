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
});

export const ChangeLabel = (args) => ({
  components: { MyButton },
  template: '<my-button @click="onClick" :label="label" />',
  data() {
    return args;
  },
});
ChangeLabel.argTypes = {
  label: { defaultValue: 'hoge' },
};

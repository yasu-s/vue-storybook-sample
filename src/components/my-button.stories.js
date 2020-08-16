import MyButton from './MyButton.vue';

export default {
  title: 'MyButton',
  component: MyButton,
};

export const Basic = (args, { argTypes }) => ({
  components: { MyButton },
  template: '<my-button @click="onClick" :label="label" />',
  props: Object.keys(argTypes),
});

export const ChangeLabel = (args, { argTypes }) => ({
  components: { MyButton },
  template: '<my-button @click="onClick" :label="label" />',
  props: Object.keys(argTypes),
});
ChangeLabel.args = {
  label: 'hoge',
};

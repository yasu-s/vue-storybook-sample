import MyButton from './MyButton.vue';

export default {
  title: 'MyButton',
};

export const Basic = () => ({
  components: { MyButton },
  template: '<my-button />',
});

export const ChangeLabel = () => ({
  components: { MyButton },
  template: '<my-button label="hoge" />',
});

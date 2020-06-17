import MyButton from './MyButton.vue';

export default {
  title: 'MyButton',
};

export const Basic = () => ({
  components: { MyButton },
  template: '<my-button @click="onClick" :label="label" />',
});

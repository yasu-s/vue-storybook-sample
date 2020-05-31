import HelloWorld from './HelloWorld.vue';

export default {
  title: 'HelloWorld',
};

export const Basic = () => ({
  components: { HelloWorld },
  template: '<div style="text-align: center;"><hello-world /></div>',
});

export const ChangeMsg = () => ({
  components: { HelloWorld },
  template: '<div style="text-align: center;"><hello-world msg="hoge" /></div>',
});

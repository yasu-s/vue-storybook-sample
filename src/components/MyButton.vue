<template>
  <button @click="onClick">{{ label }}</button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    label: {
      type: String,
      default: 'button',
    },
  },
  methods: {
    onClick($event) {
      this.$emit('click', $event);
    },
  },
};
</script>

<style scoped>
button {
  background: yellow;
}
</style>

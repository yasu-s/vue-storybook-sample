<template>
  <button>{{ label }}</button>
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
};
</script>

<style scoped>
button {
  background: yellow;
}
</style>

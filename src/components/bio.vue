<template>
  <header>
    <h1>{{ info.name }}</h1>
    <blockquote>{{ info.description }}</blockquote>
  </header>
</template>

<script lang="ts">
export default {
  props: {
    info: {
      type: Object,
      default () {
        return {
          "name": "",
          "description": "",
        };
      },
    },
  },
};
</script>

<style scoped>
</style>

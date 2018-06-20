<template>
  <div>
    <p>This is a {{ greeting }}</p>
  </div>
</template>

<script lang="ts">
export default {
  data () {
    return {
      greeting: "Test",
    };
  },
};
</script>

<style scoped>
  p {
    font-size: 2em;
    text-align: center;
  }
</style>

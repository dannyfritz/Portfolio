<template>
  <ul class="columns">
    <li
      v-for="item
        in
      items"
      :key="item.title"
      class="column">
      <article>
        <h1>{{ item.title }}</h1>
        <img
          v-if="item.image"
          :src="'/assets/images/' + item.image">
        <ul>
          <li
            v-for="link in item.links"
            :key="link.url">
            <a :href="link">{{ link.text }}</a>
          </li>
        </ul>
      </article>
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  props: {
    items: {
      type: Array,
      default () {
        return [];
      },
    },
  },
};
</script>

<style scoped>
</style>

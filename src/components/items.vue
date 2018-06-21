<template>
  <ul class="items">
    <li
      v-for="item
        in
      items"
      :key="item.title"
      class="item"
    >
      <article>
        <div class="bottom">
          <h1>{{ item.title }}</h1>
        </div>
        <img
          v-if="item.image"
          :src="'/assets/images/' + item.image">
        <ul>
          <li
            v-for="link in item.links"
            :key="link.url">
            <i
              v-if="link.icon"
              :class="link.icon"/>
            <a :href="link.url">{{ link.text }}</a>
          </li>
        </ul>
      </article>
    </li>
  </ul>
</template>

<style scoped>
h1 {
  font-size: 1.5rem;
  font-weight: 300;
}
.bottom {
  display: flex;
  height: 3.5rem;
  align-items: flex-end;
  padding-bottom: 0.5rem;
}
.items {
  --item-width: 12rem;
  --item-gutter: 2rem;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  max-width: calc(var(--item-width) * 4);
}
.item {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: calc(var(--item-width) - var(--item-gutter));
  padding-right: var(--item-gutter);
  /* padding-bottom: 1rem; */
}
.item > article > img {
  margin-bottom: 0.5rem;
  max-height: 6rem;
}
a {
  line-height: 1.25em;
}
.bg-alt a:visited, .bg-alt a, .bg-alt i, .bg-alt h1 {
  color: white;
}
.bg a:visited, .bg a, .bg i, .bg h1 {
  color: black;
}
i {
  width: 1.25rem;
}
</style>

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

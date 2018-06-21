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
        <blockquote>{{ item.description }}</blockquote>
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
  font-weight: 400;
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
.item blockquote {
  font-size: 0.5rem;
  text-align: justify;
}
.item > article > img {
  margin: 0.5rem 0;
  max-height: 6rem;
  /* cursor: help; */
}
a {
  line-height: 1.25em;
}
.bg-alt a:visited, .bg-alt a, .bg-alt i, .bg-alt h1, .bg-alt blockquote {
  color: white;
}
.bg a:visited, .bg a, .bg i, .bg h1, .bg blockquote {
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

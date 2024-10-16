<script setup>
import { useData } from "vitepress";
import { format } from "date-fns";
const postDate = format(
  new Date(useData().frontmatter.value.date),
  "yyyy-MM-dd",
);
</script>

<template>
  <h1>
    {{ $frontmatter.title }}
  </h1>
  <p v-if="postDate">
    Published on <time>{{ postDate }}</time>
  </p>
  <blockquote>
    <p v-if="$frontmatter.summary">{{ $frontmatter.summary }}</p>
  </blockquote>
</template>

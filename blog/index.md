# Posts

<script setup>
  import { data as posts } from "./posts.data.ts";
</script>
<ul>
  <li v-for="post of posts">
    <a :href="post.url">{{ post.frontmatter.title }}</a>
    <span v-if="post.date">{{ post.date }}</span>
    <span v-if="post.frontmatter.author"> by {{ post.frontmatter.author }}</span>
    <div v-if="post.frontmatter.summary">{{ post.frontmatter.summary }}</div>
  </li>
</ul>

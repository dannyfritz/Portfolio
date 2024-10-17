# Posts

<script setup>
  import { data as posts } from "./posts.data.ts";
</script>
<ul>
  <li v-for="post of posts">
    <code v-if="post.date">{{ post.date }}</code>
    <a :href="post.url"><strong>{{ post.frontmatter.title }}</strong></a>
    <blockquote>
      <div v-if="post.frontmatter.summary">{{ post.frontmatter.summary }}</div>
    </blockquote>
  </li>
</ul>

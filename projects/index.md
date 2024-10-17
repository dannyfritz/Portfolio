# Projects

<script setup>
  import { data as projects } from "./projects.data.ts";
</script>
<ul>
  <li v-for="project of projects">
    <a :href="project.url">{{ project.frontmatter.title }}</a>
    <span v-if="project.date">{{ project.date }}</span>
    <div v-if="project.frontmatter.summary">{{ project.frontmatter.summary }}</div>
  </li>
</ul>

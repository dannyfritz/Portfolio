import { createContentLoader } from "vitepress";
import { compareDesc, format } from "date-fns";

export default createContentLoader("./blog/posts/*.md", {
  transform(raw) {
    return raw
      .map(({ url, frontmatter }) => ({
        url,
        frontmatter,
        date: format(new Date(frontmatter.date), "yyyy-MM-dd"),
      }))
      .sort((a, b) => compareDesc(a.date, b.date));
  },
});

import { imgLazyload } from "@mdit/plugin-img-lazyload"
import { mark } from "@mdit/plugin-mark";
import { footnote } from "@mdit/plugin-footnote";
import { alert } from "@mdit/plugin-alert";
import { tasklist } from "@mdit/plugin-tasklist";
import { mathjax, createMathjaxInstance } from "@mdit/plugin-mathjax";
import { container } from "@mdit/plugin-container";
import { abbr } from "@mdit/plugin-abbr";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default async function(eleventyConfig) {
  eleventyConfig.setOutputDirectory("docs");
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("favicon.png");
	eleventyConfig.addPassthroughCopy("blog/posts/images");
	eleventyConfig.addPassthroughCopy("projects/images");
  eleventyConfig.addGlobalData("generatedDate", new Date());
  const mathjaxInstance = await createMathjaxInstance({});
  eleventyConfig.amendLibrary("md", (mdLib) =>
    mdLib
      // images automatically have lazy added
      .use(imgLazyload)
      // == text ==
      .use(mark)
      // a scientific fact. [^first]
      // [^first]: my footnote
      .use(footnote)
      // > [!warning]
      // > Warning Text
      .use(alert)
      // - [x] my task
      .use(tasklist)
      // $$ E=mc^2 $$
      .use(mathjax, mathjaxInstance)
      // ::: details
      // text :::
      .use(container, { name: "details" })
      .use(container, { name: "info" })
      // *[HTML]: Hyper Text Markup Language
      // The HTML specification is maintained by the W3C.
      .use(abbr)
  );
  eleventyConfig.addPlugin(feedPlugin, {
		type: "atom",
		outputPath: "/feed.xml",
		collection: {
			name: "post", // iterate over `collections.posts`
			limit: 0,      // 0 means no limit
		},
		metadata: {
			language: "en",
			title: "Danny Fritz's Blog",
			subtitle: "Musings about life, software engineering, the world, and math.",
			base: "https://dannyfritz.com/",
			author: {
				name: "Danny Fritz",
				email: "me@dannyfritz.com",
			}
		}
	});
};

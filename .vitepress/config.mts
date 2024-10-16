import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
	title: "Danny Fritz",
	description: "Danny's Personal Musings",
	lastUpdated: true,
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "Blog", link: "/blog" },
			{ text: "Projects", link: "/projects" },
		],
		socialLinks: [
			{ icon: "github", link: "https://github.com/dannyfritz" },
			{ icon: "linkedin", link: "https://linkedin.com/in/dcfritz/" },
		],
		footer: {
			message: "Made with <3 by Danny Fritz using VitePress"
		}
	},
});

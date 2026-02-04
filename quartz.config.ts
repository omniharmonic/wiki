import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Omniharmonic",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "wiki.omniharmonic.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: {
          name: "Inter",
          weights: [400, 700],
          includeItalic: false,
        },
        body: {
          name: "Roboto",
          weights: [400, 500, 700],
          includeItalic: true,
        },
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#f7f9fa",
          lightgray: "#dde4e8",
          gray: "#8a9baa",
          darkgray: "#2d3e4a",
          dark: "#0F3A48",
          secondary: "#0284C7",
          tertiary: "#38bdf8",
          highlight: "rgba(2, 132, 199, 0.10)",
          textHighlight: "#0284C733",
        },
        darkMode: {
          light: "#0F3A48",
          lightgray: "#17495a",
          gray: "#4a7a8c",
          darkgray: "#c8d8e0",
          dark: "#eaf2f5",
          secondary: "#0284C7",
          tertiary: "#38bdf8",
          highlight: "rgba(2, 132, 199, 0.15)",
          textHighlight: "#0284C744",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config

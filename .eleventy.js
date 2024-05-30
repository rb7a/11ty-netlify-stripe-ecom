// const fs = require("fs");
// const pluginRss = require("@11ty/eleventy-plugin-rss");
// const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
// const filters = require("./src/_11ty/filters");
// const shortcodes = require("./src/_11ty/shortcodes");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("./src/bundle.js");

  // Filters
  Object.keys(filters).forEach((filterName) => {
    eleventyConfig.addFilter(filterName, filters[filterName]);
  });

  return {
    templateFormats: ["md", "njk", "html", "liquid"],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about it.
    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for URLs (it does not affect your file structure)
    pathPrefix: "/",

    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: "./src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};

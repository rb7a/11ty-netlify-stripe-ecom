const filters = require("./src/_11ty/filters");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/_includes/style.css");
  // Filters
  Object.keys(filters).forEach((filterName) => {
    eleventyConfig.addFilter(filterName, filters[filterName]);
  });
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  }
};